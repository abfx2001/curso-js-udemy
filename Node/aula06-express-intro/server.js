const express = require('express')
const app = express()

// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST,   GET,  PUT,    DELETE

// http://meusite.com/ <- GET -> entregue a página / 
// http://meusite.com/sobre <- GET -> entregue a página /sobre


// método GET, de requisição e resposta na página '/'
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
})

// pode ter mais de um método diferente por rota, 
// no caso o envio do formulário que foi trazido pelo GET,
// vai ser enviado pelo POST na mesma rota
app.post('/', (req, res) => {
    res.send('Recebi o Formulário!')
})


app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato!')
})


// vai ouvir tudo que esta na porta definida e executar o servidor.
app.listen(3003, () => {
    console.log('Acesso em http://localhost:3003')
    console.log('Servidor em execução na porta 3003')
})