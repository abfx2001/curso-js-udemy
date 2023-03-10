// Dobre os números
const numeros = [5, 50, 20, 1, 3, 5, 6, 8, 30, 65, 11, 22, 74, 23]
const numerosEmDobro = numeros.map(valor => valor * 2)
console.log(numerosEmDobro)

// Para cada elemento
// Retorne apenas um string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em casa objeto 
const pessoas = [
    { nome: 'Arthur', idade: 21 },
    { nome: 'Bianca', idade: 38 },
    { nome: 'Carlos', idade: 64 },
    { nome: 'Daniel', idade: 16 },
    { nome: 'Elias', idade: 71 },
    { nome: 'Flávio', idade: 54 },
]

const nomes = pessoas.map(obj => obj.nome)
console.log(nomes)

const idades = pessoas.map(obj => ({ idade: obj.idade }))
console.log(idades)

const comIds = pessoas.map((obj, indice) => {
    const newObj = { ...obj }
    newObj.id = (indice + 1) * 1000
    return newObj
})
console.log(pessoas)
console.log(comIds)