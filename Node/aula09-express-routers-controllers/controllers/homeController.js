exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="textoInput">
    <button>Enviar</button>
    </form>
    `)
}

exports.trataPost = (req, res) => {
    res.send('Nova rota de POST')
}