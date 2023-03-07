mostraHora = () => {
    let data = new Date()

    return data.toTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval(() => {
    console.log(mostraHora())
}, 1000)

setTimeout(() => {
    clearInterval(timer)
}, 6000)

setTimeout(() => {
    console.log('5 segundos da Hora!')
}, 6500) // leva em consideraçao o tempo global.