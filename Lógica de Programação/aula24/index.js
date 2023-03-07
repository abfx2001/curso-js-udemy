// Entre 0 - 11 - bom dia
// Entre 12 - 17 - boa tarde
// Entre 18 - 23 - boa noite

const hora = 13

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite')
} else {
    console.log('Olá, tudo bem?')
}