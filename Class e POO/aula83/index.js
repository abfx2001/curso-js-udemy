class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }
    // Método de instância
    aumentarVolume() {
        this.volume += 2
    }
    diminuirVolume() {
        this.volume -= 2
    }

    // Método estático
    static trocarPilha() {
        console.log('Ok, vou trocar')
    }

}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1)

// Método referente a Classe
ControleRemoto.trocarPilha()