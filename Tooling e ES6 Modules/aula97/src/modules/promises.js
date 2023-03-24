function promise() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('Olá, sou a promise!!')
            res()
        }, 2000)
    })
}

export default async function () {
    await promise()
    console.log('Finalizou!')
}