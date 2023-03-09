// Valor por referência 

const nomes = ['Eduardo', 'Maria', 'João', 'Wallace', 'Jeremias', 'José']
nomes[2] = 'joana'
//delete nomes[1]
const novo = [...nomes]
const novo2 = nomes.slice(1, -2)
novo.pop()
console.log(nomes)
console.log(nomes.length)
console.log(novo)
console.log(novo2)

// shift -> remove do começo
// unshift -> adiciona no começo
// pop -> remove do fim
// push -> adiciona no fim

const nome = 'Arthur Batista Furlan'
const nomes2 = nome.split(' ')
console.log(nomes2)

const nome2 = ['Arthur', 'Batista', 'Furlan']
const nomes3 = nome2.join(' ')
console.log(nomes3)