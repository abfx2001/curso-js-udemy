const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {

    if (numero === 2) {
        continue
    }

    if (numero === 7) {
        break
    }

    console.log(numero)
}

// continue -> pula para a próxima interação
// break -> pula para fora da iteração


// pode ser usado em outras estruturas de repetição,
// mas no While e Do While é preciso atualizar a variável de controle
// para não entrar em um loop infinito