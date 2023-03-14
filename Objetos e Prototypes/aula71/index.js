// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    //this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: false, // pode ou não altera o valor
        configurable: true // configurável, e se pode ou não apagar a variável
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor da chave
            writable: false, // pode ou não altera o valor
            configurable: true // configurável, e se pode ou não apagar a variável
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor da chave
            writable: false, // pode ou não altera o valor
            configurable: true // configurável, e se pode ou não apagar a variável
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 50
//delete p1.estoque
console.log(p1)
console.log(Object.keys(p1))