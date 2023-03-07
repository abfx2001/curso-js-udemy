
// arguments que sustenta todos os argumentos enviados
function funcao() {
    // console.log('oie')
    // console.log(arguments[0])
    // console.log(arguments[3])
    let total = 0
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total)
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function funcao1(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
}
funcao1(1, 2, 3)

// Valor padrão
function funcao2(a, b = 2, c = 4) {
    console.log(a + b + c)
}
funcao2(2, 10)

// Resh operator
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero
    }
    console.log(acumulador)
}
conta('+', 0, 10, 20, 30, 40)