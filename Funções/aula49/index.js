// Declaração de função (Function hoisting) 
// pode executar a função ou depois ou antes no código
falaOi()
function falaOi() {
    console.log('Oi!')
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
    console.log('Sou um dado')
}

function executaFuncao(funcao) {
    console.log('vou executar sua função abaixo...')
    funcao()
}
executaFuncao(souUmDado)

// Arrow function
const funcaoArrow = () => {
    console.log('sou uma arrow function')
}
funcaoArrow()

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...')
    }
}
obj.falar()