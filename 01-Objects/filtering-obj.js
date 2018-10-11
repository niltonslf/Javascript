const user1 = {
  id: 1,
  name: "Nilton Lopes",
  hashSenha: "#SKJDS&*$)@_@1"
}

const keys = ["id", "name"];
const newUser = {}


keys.forEach(key => {
  newUser[key] = user1[key]
})

console.log(newUser);

// console.log(Object.keys(obj1))
