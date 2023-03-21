//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map

const pessoas = [
    { id: 3, nome: 'Arthur' },
    { id: 2, nome: 'Bravo' },
    { id: 1, nome: 'Charlie' },
]

// const novasPessoas = {}
// for (const pessoa of pessoas) {
//     const { id } = pessoa
//     novasPessoas[id] = { ...pessoa }
// }

const novasPessoas = new Map()
for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas.set(id, { ...pessoa })
}

console.log(novasPessoas)
console.log(novasPessoas.get(2))

novasPessoas.delete(2)
console.log(novasPessoas)

for (const pessoas of novasPessoas.values()) {
    console.log(pessoas)
}