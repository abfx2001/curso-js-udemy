// const h1 = document.querySelector('.container h1')
// const data = new Date()

// getDiaSemanaTexto = (diaSemana) => {
//     const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira',
//         'quinta-feira', 'sexta-feira', 'sábado']
//     return diasSemana[diaSemana]
// }

// getDiaNomeMes = (numeroMes) => {
//     const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
//         'julho', 'agosto', 'sertembro', 'outubro', 'novembro', 'dezembro']
//     return meses[numeroMes]
// }

// zeroAEsquerda = (num) => {
//     return num >= 10 ? num : `0${num}`
// }

// criaData = (data) => {
//     const diaSemana = data.getDay()
//     const numeroMes = data.getMonth()

//     const nomeDia = getDiaSemanaTexto(diaSemana)
//     const nomeMes = getDiaNomeMes(numeroMes)

//     return `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
//         `de ${data.getFullYear()} ` +
//         `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
// }

// h1.innerHTML = criaData(data)

const h1 = document.querySelector('.container h1')
const data = new Date()
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })