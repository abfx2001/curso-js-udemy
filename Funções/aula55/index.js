// IIFE -> Immediately invoked function expression

(function (idade, peso, altura) {

    const sobrenome = 'Batista'
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Arthur'))
    }

    falaNome()
    console.log(idade, peso, altura)

})(30, 40, 1.80)