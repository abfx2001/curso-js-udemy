// escreva uma função que recebe 2 numeros e retorna o maior

// conceito
// function max(x, y) {
//     if (x > y) {
//         return x
//     } else {
//         return y
//     }
// }

// refatoração 1
// max = (x, y) => {
//     if (x > y) {
//         return x
//     } else {
//         return y
//     }
// }

// refatoração 2
// max = (x, y) => {
//     if (x > y) {
//         return x
//     }
//     return y
// }

// refatoração 3
// max = (x, y) => {
//     if (x > y) return x
//     return y
// }

// refatoração 4
// max = (x, y) => {
//     return x > y ? x : y
// }

// refatoração 5
max = (x, y) => x > y ? x : y


console.log(max(1, 2))