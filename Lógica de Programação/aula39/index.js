// let i = 0

// while (i <= 10) {
//     console.log(i)
//     i++
// }

random = (min, max) => {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 50
let rand = random(min, max)
// while faz a validação da condição e depois executa se for verdadeiro
while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}

console.log('##########')
// do while, primeir sempre executa uma vez e depois faz a validação da condição
do {
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10);