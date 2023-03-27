const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(3003, () => {
    console.log('Acesso em http://localhost:3003')
    console.log('Servidor em execução na porta 3003')
})