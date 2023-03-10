// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 20, 1, 3, 5, 6, 8, 30, 65, 11, 22, 74, 23]
const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor
    return acumulador
}, 0)
console.log(total)

const numeros2 = [5, 50, 20, 1, 3, 5, 6, 8, 30, 65, 11, 22, 74, 23]
const total2 = numeros2.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])
console.log(total2)

const numeros3 = [5, 50, 20, 1, 3, 5, 6, 8, 30, 65, 11, 22, 74, 23]
const total3 = numeros3.reduce((acumulador, valor) => {
    acumulador.push(valor * 2)
    return acumulador
}, [])
console.log(total3)

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Arthur', idade: 21 },
    { nome: 'Bianca', idade: 38 },
    { nome: 'Carlos', idade: 64 },
    { nome: 'Daniel', idade: 16 },
    { nome: 'Elias', idade: 71 },
    { nome: 'Flávio', idade: 54 },
]
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(maisVelha)