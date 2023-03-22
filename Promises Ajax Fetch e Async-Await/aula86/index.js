function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('ERRO'))
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('Conexão com o Banco de Dados', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Buscando dados na Base', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi(123456, rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
    })
    .then(() => {
        console.log('Exibir dados na Tela!')
    })
    .catch(e => {
        console.log('ERROR:', e)
    })

console.log('Sempre será exibido antes das promises.')