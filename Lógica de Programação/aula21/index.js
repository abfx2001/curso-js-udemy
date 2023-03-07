/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a 
== igualdade (valor) * não utilizado
=== igualdade estrita (valor e tipo)
!= diferente (valor) * não utilizado
!== diferente estrito (valor e tipo)
*/

//const comp = 10 > 5 //true
//const comp = 10 >= 5 //true
//const comp = 10 < 5 //false
//const comp = 10 <= 5 //false

const num1 = 10 //number
const num2 = '10' // string
//const comp = num1 == num2 // retorna true, mas não são iguais
const comp = num1 === num2 // aqui já retorna false, pois checa a tipagem

console.log(comp)