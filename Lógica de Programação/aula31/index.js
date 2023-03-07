// // escopo global
// const verdadeira = true

// // let tem ecopo de bloco {... bloco} -> let só atua dentro do escopo onde foi declarado.
// // var só tem escopo de função

// let nome = 'jooj' // criando
// var nome2 = 'jooj' // criando

// if (verdadeira) {
//     // escopo do if
//     let nome = 'Arthur' // criando
//     var nome2 = 'jiij' // recriando

//     if (verdadeira) {
//         var nome2 = 'jojo' // recriando
//         let nome = 'outra coisa'
//     }
// }
// console.log(nome, nome2)

var sobrenome = 'Batista'
// Uma função pode acessar variaveis de escopos vizinhos,
// mas não é possivel acessar uma variavel de dentro de uma função vindo de fora.
falaOi = () => {
    console.log(sobrenome)
}

falaOi()


