let mensagem = "um \"texto\""
console.log(mensagem)

// Strings são indexadas, 0123456...
console.log(mensagem[1])
console.log(mensagem.charAt(4))

// concatenação
console.log(mensagem.concat(' teste', ' teste2'))
console.log(mensagem + ' teste', 'teste2')
console.log(`${mensagem} teste teste2`)


console.log(mensagem.indexOf('texto'))
console.log(mensagem.indexOf('Texto')) // -1 porque não achou

console.log(mensagem.lastIndexOf('e'))

console.log(mensagem.match(/[a-z]/g))
console.log(mensagem.search(/x/g))

console.log(mensagem.replace(/t/g, '#'))

let umaString = 'o rato roeu a roupa do rei de roma.'

console.log(umaString.length)
console.log(umaString.slice(2, 6)) //start e fim sempre um a mais.
console.log(umaString.slice(-5, -1)) //pega pelo final da String.

console.log(umaString.split(' ', 3)) //divide a strinf onde encontra o ' ', 3 vezes

console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())
