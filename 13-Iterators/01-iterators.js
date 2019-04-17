var text = 'Nilton Lopes'
var iterator = text[Symbol.iterator]()

console.log(iterator)

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

for (letter of iterator) {
  console.log(letter)
  if (letter == 'p') break
}
