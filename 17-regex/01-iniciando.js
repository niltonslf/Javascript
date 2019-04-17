/**
 * Expressões regulares
 * São padrões utilizados para selecionar combinações de caracteres em uma string.
 * Em Javascrip,expressões regulares também são objetos.
 * @source https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
 */

/**
 * Exemplo 01 - Utilizando expressões da forma literal:
 */

// \ => Pesquisando por um caractere literal

let str = 'Looking for something.'
console.log(str.match(/\./g))

// ^x => Pesquisando um caractere no inicio da string
// i => Não case sentive
console.log(str.match(/^l/gi))

// x$ => Pesquisando um caractere no final da string
console.log(str.match(/\.$/g))

// x* => Pesquisando por 0 ou mais caractres em uma string
str = 'Bananaaana'
console.log(str.match(/na*/g))

// (x)* => Pesquisando por 0 ou mais grupo de caractres em uma string
console.log(str.match(/(na)*/g))

// x+ => Pesquisando por 1 ou mais caracteres em uma string
console.log(str.match(/na+/g))

// (x)+ Pesquisando por 1 ou mais grupo de caracteres em uma string
console.log(str.match(/(na)+/g))

// x? => Pesquisando por 0 ou 1 vez o caracter precedido em uma string
console.log(str.match(/a?/g))
