/*
* Primitivos (imitáveis) - String, number, boolean, undefined, null (bigint, symbol)
* valores copiados
*/
let a = 'A'
let b = a // Cópia
console.log(a, b)

a = 'mudou'
console.log(a, b)

/*
* Referência (mutável) - Array, object, function
* passados por referência
*/
let c = [1, 2, 3]
let d = c
let e = [...d] //copia o array [spreed] pode ser usado em objeto também {...d}
console.log(c, d)

c.push(4)
console.log(c, d)

d.pop()
console.log(c, d) 