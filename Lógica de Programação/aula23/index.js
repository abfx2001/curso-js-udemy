/*
js retorna o valor em sí do que esta como false em uma expressão, caso tudo esteja certo, ele retornar o último valor.

FALSY Values: 
false
0
'' "" ``
null / underfined
NaN

*/

// como executar uma função pela comparação
falaOi = () => {
    return 'Oi'
}
const exec = 'Arthur'
console.log(exec && falaOi())

// com o OR, ele retorna o primeiro elemento que for verdadeiro dentro da expressão, caso todas sejam false, ele vai retornar a última.