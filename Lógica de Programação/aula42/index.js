// escreva uma função ePaisagem, que:
// recebe dois argumentos, largura e altura
// de uma imagem (number)
// e retorne se a imagem estiver em modo
// paisagem.

ePaisagem = (largura, altura) => largura > altura

console.log(ePaisagem(1080, 1920))
console.log(ePaisagem(1920, 1080))