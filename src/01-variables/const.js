//CONST

const imultable = {
  name: "Nilton",
  age: "22"
}

console.log(imultable);

Object.freeze(imultable)

imultable.name = "João"

console.log(imultable);
