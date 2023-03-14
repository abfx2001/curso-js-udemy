/*
Object.values
Object.entries
Object.assign(destino, any)
Object.getOwnPropertyDescriptor(objeto, 'propriedades')
... (spread)

// Já Vimos!
Object.keys (retornar as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Caneca', preco: 1.9, material: 'vidro' }
//const outraCoisa = { ...produto, material: 'porcelana' }
const outraCoisa = Object.assign({}, produto, { material: 'porcelana' })

outraCoisa.preco = 4.5
console.log(produto)
console.log(outraCoisa)

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

console.log(Object.values(produto))

console.log(Object.entries(produto))

for (let [chave, valor] of Object.entries(produto)) {
    console.log(`${chave}: ${valor}`)
}
