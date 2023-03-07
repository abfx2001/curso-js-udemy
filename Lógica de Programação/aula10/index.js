/* 
*     -| Aritiméticos |-
*   + -> adição/concatenação
*   - -> subtração
*   / -> divisão
*   * -> multiplicação
*   ** -> potenciação
*   % -> resto da divisão
*/

// Operador de incremento:
let contador = 1
// porterior - primeiro reconhece o valor e depois faz o incremento
console.log(contador++)
contador++
// anterior - primeiro incrementa e de depois reconhece o valor
++contador
console.log(++contador)

// Operadpr de decremento:
let contadorD = 10
// porterior - primeiro reconhece o valor e depois faz o decremento
console.log(contadorD--)
contadorD--
// anterior - primeiro dencrementa e de depois reconhece o valor
--contadorD
console.log(--contadorD)

// Operadores de atribuição
contador += 2 // mesma coisa que contador = contador + 2
contador -= 2 // mesma coisa que contador = contador - 2
contador *= 2 // mesma coisa que contador = contador * 2
contador **= 2 // mesma coisa que contador = contador ** 2
//...

// NaN - Not a Number - parseInt (inteiro), parseFloat (decimais)
const num1 = Number('10') //Number faz a conversao para o mais adequado dentro de inteiro e float.
console.log(num1)
console.log(typeof num1)