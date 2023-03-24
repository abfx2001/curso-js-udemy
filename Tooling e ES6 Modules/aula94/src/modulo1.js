const nome = 'Arthur'
const sobrenome = 'Batista Furlan'
const idade = 21

const cpf = 'numero cpf' //não foi exportado

export default function soma(x, y) {
    return x + y
}//apenas um pode ser o default

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

export { nome, sobrenome as sobrenome2, idade }
//exportar com outro nome


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export