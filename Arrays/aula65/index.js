// filter -> Sempre retorna um array,
// com a mesma quantidade de elementos ou menos.

// Retorne os número maiores que 10
const numeros = [5, 50, 20, 1, 3, 5, 6, 8, 30, 65, 11, 22, 74, 23]

const numerosFiltrados = numeros.filter(valor => valor > 10) // Função de Callback em uma linha
// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array)
//     return valor > 10
// })
console.log(numerosFiltrados)

// Retorne as pessoas que tem o nome co m5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a 
const pessoas = [
    { nome: 'Arthur', idade: 21 },
    { nome: 'Bianca', idade: 38 },
    { nome: 'Carlos', idade: 64 },
    { nome: 'Daniel', idade: 16 },
    { nome: 'Elias', idade: 71 },
    { nome: 'Flávio', idade: 54 },
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6)
console.log(pessoasComNomeGrande)

const pessoasMaisVelhas = pessoas.filter(obj => obj.idade > 50)
console.log(pessoasMaisVelhas)

const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'))
console.log(nomeTerminaComA)