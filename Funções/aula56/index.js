// Factory function 

criaPessoa = (nome, sobrenome, altura, peso) => {
    return {
        nome,
        sobrenome,
        get nomeCompleto() { // Getter
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor) { // Setter
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },
        fala(assunto = 'nada!') { // isto é um método!
            return `${this.nome} está falando sobre ${assunto}.`
        },
        altura,
        peso,
        get imc() { // Getter
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Arthur', 'Batista', 1.70, 80)
p1.nomeCompleto = 'Arthur Batista Furlan'
console.log(p1.nomeCompleto)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())

// const p2 = criaPessoa('Jooj', 'Silva', 1.80, 60)
// console.log(p1.nomeCompleto)
// console.log(p1.fala('JS'))
// console.log(p2.nome)
// console.log(p2.sobrenome)
// console.log(p2.imc)