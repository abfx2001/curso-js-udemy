// Closures -> acesso ao escopo léxico da função.

function retornaFuncao(nome) {
    return function () {
        return nome
    }
}

const funcao = retornaFuncao('Arthur')
const funcao2 = retornaFuncao('jooj')
console.dir(funcao)
console.dir(funcao2)

console.log(funcao(), funcao2())