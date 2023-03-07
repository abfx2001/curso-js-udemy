//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// const tresHoras = 60 * 60 * 3 * 1000
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + tresHoras - umDia) // 01/01/1970 Timestamp unix ou época unix

//const data = new Date(2019, 3, 20, 15, 14, 27, 500) // a, m, d, h, M, s, ms
const data = new Date('2019-04-20 20:20:59')

console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1)// Mês começa do zero
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('MS', data.getMilliseconds())
console.log('Dia semana', data.getDay()) // 0 - domingo, 6 - sábado

console.log(data.toString())

console.log(Date.now())

zeroAEsquerda = (num) => {
    return num >= 10 ? num : `0${num}`
}

formataData = (data) => {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const dataDois = new Date();
const dataBrasil = formataData(dataDois)
console.log(dataBrasil)