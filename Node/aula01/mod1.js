const nome = 'Arthur'
const sobrenome = 'Batista'

const falaNome = () => nome + ' ' + sobrenome

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}


// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome

exports.NOME = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
this.qualquerCoisa = 'O que eu quiser...'

exports.Pessoa = Pessoa

console.log(exports)