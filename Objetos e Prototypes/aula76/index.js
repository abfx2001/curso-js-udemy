// Produtos
// Borracha, lápis

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia
}

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia
}

function Borracha(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}
Borracha.prototype = Object.create(Produto.prototype)
Borracha.prototype.constructor = Borracha

function Lapis(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque
        },
        set: function (valor) {
            if (typeof valor != 'number') return
            estoque = valor
        }
    })

}
Lapis.prototype = Object.create(Produto.prototype)
Lapis.prototype.constructor = Lapis

const produto = new Produto('Gen', 11)
const borracha = new Borracha('Circular', 3.50, 'Azul')
const lapis = new Lapis('HB', 5, 'Grafite', 30)

console.log(lapis)
console.log(borracha)
console.log(produto)