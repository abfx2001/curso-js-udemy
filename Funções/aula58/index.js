// Função construtora -> constroem objetos
// Função fábrica -> fabrica objetos
// Construtora -> Pessoa (new)
function Pessoa (nome, sobrenome) {
    
    // Atributos ou Métodos Privados
    const ID = 12343456
    const metodoInterno = function(){

    }
    // Atributos ou Métodos Públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(this.nome + ': sou um método')
    }
}

const p1 = new Pessoa('Arthur', 'Batista')
const p2 = new Pessoa('Maria', 'Silva')
p2.metodo()

