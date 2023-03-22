function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Cai no ERRO')
                return
            }
            resolve(msg.toUpperCase() + ' - Passei na promise')
            return
        }, tempo)
    })
}



const promises1 = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    //esperaAi(1000, 1000),
    'Outro valor'
]
// Promise.all -> resolve todas as promise e entrega os results todos de uma vez!
Promise.all(promises1)
    .then(valor => {
        console.log(valor)
    })
    .catch(erro => {
        console.log(erro)
    })


const promises2 = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
]
// Promise.race -> entrega a primeira a ser resolvida
Promise.race(promises2)
    .then(valor => {
        console.log(valor)
    })
    .catch(erro => {
        console.log(erro)
    })

// Promise.resolve -> já espera um resposta resolvida
function baixaPagina() {
    const emCache = true

    if (emCache) {
        return Promise.resolve('Página em cache')
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e))


// Promise.reject -> entra na rejeição da promise
function baixaPagina2() {
    const emCache = true

    if (emCache) {
        return Promise.reject('Página em cache')
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina2()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('ERROR', e))