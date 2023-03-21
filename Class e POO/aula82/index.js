class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado')
            return
        }
        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já desligado')
            return
        }
        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome)
        this.temWifi = temWifi
    }

    ligar() { //shadowing (sombra do outro método)
        console.log('olha, você alterou o método ligar.')
    }
}

const s1 = new Smartphone('iPhone', 'branco', '13')
console.log(s1)

const t1 = new Tablet('iPad', true)
t1.ligar()