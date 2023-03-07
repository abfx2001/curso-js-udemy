//Ternário -> ? :
const pontuacaoUsuario = 1000

//-------------------------------- (condição) ? 'Valor verdadeiro' : 'valor falso'
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'

const corUsuario = null
const corPadrao = corUsuario || 'Preta'

console.log(nivelUsuario, corPadrao)
// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP')
// } else {
//     console.log('Usuário normal')
// }
