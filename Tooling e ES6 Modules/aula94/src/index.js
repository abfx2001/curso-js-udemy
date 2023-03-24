import { nome as nome2, sobrenome2, idade, Pessoa } from './modulo1'
//importar com outro nome

// import * as MeuModulo from './modulo1'
// console.log(MeuModulo)

import qualquerNome from './modulo1'
console.log(qualquerNome(20, 10))
// importa o padrão/default do modulo

const nome = 'Jooj'

console.log(nome, nome2, sobrenome2, idade)


const p1 = new Pessoa('Arthur', 'Furlan')
console.log(p1)



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import