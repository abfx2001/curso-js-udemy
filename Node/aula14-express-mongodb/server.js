require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING) //, { useNewUrlParse: true, useUnifiedTopology: true }
    .then(() => {
        app.emit('pronto')
    })
    .catch(e => console.log(e))

const routes = require('./routes')
const path = require('path')
const { middlewareGlobal } = require('./src/middlewares/middlewares')

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// Meus próprios middleware
app.use(middlewareGlobal)
app.use(routes)

app.on('pronto', () => {
    app.listen(3003, () => {
        console.log('Acesso em http://localhost:3003')
        console.log('Servidor em execução na porta 3003')
    })
})
