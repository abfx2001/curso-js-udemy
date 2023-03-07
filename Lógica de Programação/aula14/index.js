// IEEE 754-2008

let num1 = 0.7
let num2 = 0.1

num1 += num2 //0.8
num1 += num2 //0.9
num1 += num2 //1.0

console.log(num1)
num1 = Number(num1.toFixed(2))
console.log(num1)
console.log(Number.isInteger(num1))

// console.log(num1.toString() + num2)
// console.log(typeof num1)
// console.log(num1.toString(2)) -> mostra número em binário
// console.log(num1.toFixed(2)) -> fixa duas casas decimais
// console.log(Number.isInteger(num1)) -> mostra se é interio ou não

