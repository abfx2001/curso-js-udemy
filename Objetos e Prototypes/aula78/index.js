// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function () {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
    )
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

function ContaPoupança(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

ContaPoupança.prototype = Object.create(Conta.prototype)
ContaPoupança.prototype.constructor = ContaPoupança

const conta1 = new Conta(11, 22, 33)
conta1.depositar(11)
conta1.sacar(10)
conta1.sacar(35)

const conta2 = new ContaCorrente(11, 22, 0, 100)
conta1.depositar(11)
conta1.sacar(10)
conta1.sacar(35)