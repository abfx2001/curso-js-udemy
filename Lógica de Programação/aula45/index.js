try {
    //console.log(a)
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')
} catch (error) {
    console.log('Tratando o erro')
} finally {
    console.log('FINALLY: eu sempre sou executado!!')
}

retornaHora = (data) => {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date')
    }

    if (!data) {
        data = new Date()
    }

    return data.toTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora()
    console.log(hora)
} catch (e) {
    // Fazer o tratamento do erro!
} finally {
    console.log('-- tenha um ótimo dia --')
}

