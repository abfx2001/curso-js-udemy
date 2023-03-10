// Retorne a soma do dobro de todos os pares
// -> Filter pares
// -> Dobrar os valores
// -> Reduzir (somar os elementos)

const numeros = [5, 50, 20, 1, 3, 5, 6, 8, 30, 65, 11, 22, 74, 23]
const numerosParesSomados = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor)

console.log(numerosParesSomados)