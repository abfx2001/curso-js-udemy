function saudacao(nome) {
    return `Bom dia ${nome}!`
}

const variavel = saudacao('Arthur')
console.log(variavel)

function soma(x = 0, y = 0) { //caso não tenha argumento ele assumi o valor de 0
    const resultado = x + y
    return resultado
}

console.log(soma(3, 5))

// const raiz = function (n) {
//     return n ** 0.5
// };

// Arrow function
// const raiz = (n) => {
//     return n ** 0.5
// };
const raiz = n => n ** 0.5 // simplificada, quando tem um parâmetro e uma linha de função.

console.log(raiz(9))