relogio = () => {
    getTimeFromSeconds = (seconds) => {
        const data = new Date(seconds * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    const relogio = document.querySelector('.relogio')
    let seconds = 0
    let timer

    initRelogio = () => {
        timer = setInterval(() => {
            seconds++
            relogio.innerHTML = getTimeFromSeconds(seconds)
        }, 1000)
    }

    document.addEventListener('click', (e) => {
        const el = e.target

        if (el.classList.contains('zerar')) {
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            seconds = 0
            relogio.classList.remove('pausado')
        }
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            initRelogio()
        }
        if (el.classList.contains('pausar')) {
            clearInterval(timer)
            relogio.classList.add('pausado')
        }
    })
}

relogio()