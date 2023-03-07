const pessoa = {
    nome: 'Arthur',
    sobrenome: 'Batista',
    idade: 21,
    endereço: {
        rua: 'R. sem nome',
        numero: 999
    }
}

////Atribuição via desestruturação
//const { nome: nome = '', sobrenome, idade } = pessoa
//console.log(nome, sobrenome)

const { endereço: { rua: r, numero = 000 }, endereço } = pessoa
console.log(r, numero, endereço)

const { nome, ...resto } = pessoa
console.log(nome, resto)