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

// x|y => Buscar correspondência de x ou y
str = 'I wake up early every morning'
console.log(str.match(/wake|early/g))

// {n} => Pesquisa ocorrências  do caractere precedido.
str = 'Scooby-doooo'
console.log(str.match(/o{2}/g))

// {n,m} => Pesquisa a menor (n) e a maior (m) ocorrências do caractere precedido. 
console.log(str.match(/o{2,4}/g))

// [xyz] => Pesquisa correpondência de um conjunto de caracteres
console.log('correspondência de [xyz]',str.match(/[cob]/g))
// Pode-se utilizar o hífen para definir um intervalo de caracteres
console.log(str.match(/[c-o]/g))
// Pode-se utilizar case sensitive
console.log(str.match(/[Sc-o]/g))
// Ou ignorar o case sensitive utilizando i no final da expressão
console.log(str.match(/[Sc-o]/gi))

// [^xyz] => Negação de [xyz], ou seja, busca pelos cacteres diferentes do informados
console.log('Não correspondência de [xyz]',str.match(/[^c-o]/g))

// TODO: [\b]

// \b => Busca por correspondência  de uma fronteira de caractere. Uma fronteira corresponde a posição onde o caractere/palavra não é seguido ne nenhum caractere ou palavra.
str = "Testing match"
console.log('\\b',str.match(/s\b/gi))
// output: null => Retorna esse resultado pois s (termo buscado) é seguido por outro caractere

// \B => Negação da fronteire de caractere. No lugar buscar correspondência somente onde o caractere/palavra não é seguido por um caractere, irá buscar onde for seguido
console.log('\\B',str.match(/s\B/gi))

// TODO: \cx

// \d => Encontra correspondência de um número [0-9]
str = 'My phone number is: +55 9 0000-0000'
console.log('\\d', str.match(/\d/g))

// \D => Negação de \d
console.log('\\D', str.match(/\D/g))

// TODO: \f

// \n => Encontra correspondência de um caractere de quebra de linha
let longStr = 'First line\n Second Line'
console.log('\\n', longStr.match(/e\n/g))

// TODO: \r

// \s => Encontra correspondêcia com um único caractere de espaço em branco, tabulação, quebra de linha...
console.log('\\s', longStr.match(/\s/g))

// TODO: \S => Negação de \s

console.log('\\S', longStr.match(/\S/g))

// \t => Encontra correspondência de uma tabulação
str = 'My text with		tabulation & 2.'
console.log(str)
console.log('\\t', str.match(/\t/g))

// TODO: \v

// \w => Encontra correspondencia de qualquer caractere alfanumérico incluindo underline. Equivalente a [A-Za-z0-9_]
console.log('\\w', str.match(/\w/g))

// \W => Negação de \w
console.log('\\W', str.match(/\W/g))

// TODO: \num

// TODO: \0 => econtra correspondência de um caractere null
str = 'bla bla bla \0 bla bla'
console.log('\\0', str.match(/\0/g))

// \xhh => Encontra correspondência com códigos hexadecimais de dois digitos
str = 'World Wide Web'
console.log('\\xhh', str.match(/\x57/g))

// TODO: \uhhhh