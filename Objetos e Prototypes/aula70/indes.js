// objeto literal 
const pessoa = {
    nome: 'Arthur',
    sobrenome: 'Batista'
}
const chave = 'nome'
console.log(pessoa.nome)
console.log(pessoa['nome'])
console.log(pessoa[chave])

// construtor do objeto
const pessoa1 = new Object()
pessoa1.nome = 'Arthur'
pessoa1.sobrenome = 'Batista'

console.log(pessoa, pessoa1)

// função nos objetos
const pessoa2 = new Object()
pessoa2.nome = 'Arthur'
pessoa2.sobrenome = 'Batista'
pessoa2.idade = 21
pessoa2.getDataNascimento = () => {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - pessoa2.idade
}

console.log(pessoa2.getDataNascimento())

// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    Object.freeze(this) //congela a funcionalidade, pode ser usado em arrays também
}
const p1 = new Pessoa('Maria', 'Silva')
delete p1.nome

console.log(p1)