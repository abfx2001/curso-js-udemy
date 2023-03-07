const elementos = [
    { tag: 'p', texto: 'texto qualquer...1' },
    { tag: 'div', texto: 'texto qualquer...2' },
    { tag: 'section', texto: 'texto qualquer...3' },
    { tag: 'footer', texto: 'texto qualquer...4' }
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i] // atribuiçao via desestruturação
    let tagCriada = document.createElement(tag)
    let textoCriado = document.createTextNode(texto)

    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada)
}

container.appendChild(div)