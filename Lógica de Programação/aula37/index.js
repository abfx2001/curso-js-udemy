// For in -> lê os índices ou as chaves de um objeto

const frutas = ['pera', 'maçã', 'uva']

for (let index in frutas) {
    console.log(frutas[index])
}

const pessoa = {
    nome: 'Arthur',
    sobrenome: 'Batista',
    idade: 21
}

for (let key in pessoa) {
    console.log(key, pessoa[key])
}

const nome = 'Arthur Batista'

// For of -> ele não usa o índex dos iteráveis, apenas percorre e já exibe o valor

for (let value of nome) {
    console.log(value)
}

for (let value of frutas) {
    console.log(value)
}

// For each -> função que retornar cada valor de um objeto

frutas.forEach(function (value, index, array) {
    console.log(value, index, array)
})

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índex ou chaves (strings, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)