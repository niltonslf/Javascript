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

// . => Pesquisando por qualquer caractere
console.log(str.match(/./g))


// Substituindo caracteres numa string
str = '000.000.000,11'
console.log(str.replace(/\./g,'').replace(/\,/g,'.'))

// x(?=y) => Pesquisa correspondência em x apenas se x for precedido de y. Também chamado de lookahead
// g => Buscar globalmente
// i => case insensitive

str = 'Nilton Lopes Nilton Alves'
console.log(str.match(/nilton(?=\sLopes)/gi))

// x(?!y) => Negação lookahead
console.log(str.match(/nilton(?!\sLopes)/gi))

// TODO: x|y

// TODO: {n}

// TODO: {n,m}

// TODO: [xyz]

// TODO: [^xyz]

// TODO: [\b]

// TODO: \b

// TODO: \B

// TODO: \cx

// TODO: \d

// TODO: \D

// TODO: \f

// TODO: \n

// TODO: \r

// TODO: \s

// TODO: \S

// TODO: \t

// TODO: \v

// TODO: \w

// TODO: \W

// TODO: \W

// TODO: \num

// TODO: \0

// TODO: \xhh

// TODO: \uhhhh