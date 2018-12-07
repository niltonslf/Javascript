function* getNames() {
  yield 'Nilton'
  yield 'Lopes'
  yield 'Filho'
}

var names = getNames()

console.log(names.next())
console.log(names.next())
console.log(names.next())
console.log(names.next())
