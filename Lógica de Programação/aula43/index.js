// Fizz Buzz de sempre, tudo mundo sabe o que é
// com diferença para checar se é realmente um número e
// usar a função com números de 0 a 100

fizzBuzz = (n) => {
    if (typeof n !== 'number') return n
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz'
    if (n % 3 === 0) return 'Fizz'
    if (n % 5 === 0) return 'Buzz'
    return n
}

console.log('a', fizzBuzz('a'))

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}