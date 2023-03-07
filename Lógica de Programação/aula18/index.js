criaPessoa = (nome, sobrenome, idade) => {
    return { nome, sobrenome, idade }
}
const pessoa1 = criaPessoa('Arthur', 'Batista', 21)

const pessoa2 = {
    nome: 'Arthur',
    sobrenome: 'Batista',
    idade: 21,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando Oi e minha idade é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++
    }
}

console.log(pessoa1.idade)

pessoa2.fala()
pessoa2.incrementaIdade()
pessoa2.fala()