// Função recursiva, tomar cuidado para não extrapolar no uso, pois pode gerar
// erro de Range, Maximum call stack size exceeded.

function recursiva(max) {
    console.log(max)
    if (max >= 1000000) return
    max++
    recursiva(max)
}

recursiva(0)