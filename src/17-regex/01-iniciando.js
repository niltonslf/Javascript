/**
 * Expressões regulares
 * São padrões utilizados para selecionar combinações de caracteres em uma string.
 * Em Javascrip,expressões regulares também são objetos.
 * @source https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
 */

/**
 * Exemplo 01 - Utilizando expressões da forma literal:
 */

var reg1 = /ab+c/
var str1 = 'abbc'

console.log(str1.match(reg1))
