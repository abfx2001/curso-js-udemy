const express = require('express')
const app = express()

// tratar o body das requisições
app.use(express.urlencoded({ extended: true }))

// (12345)-> URL Parameters (?)-> query Strings (chave, valor) (&) -> add mais query Strings
// /profiles/12345?campanha=googleads&nome_campanha=qualquer

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="textoInput">
    <button>Enviar</button>
    </form>
    `)
})

// (:chave)-> indica a chave de um parâmetro, (?)-> mostra que é opcional
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que eu recebi do formulário foi: ${req.body.textoInput}`)
})

app.listen(3003, () => {
    console.log('Acesso em http://localhost:3003')
    console.log('Servidor em execução na porta 3003')
})