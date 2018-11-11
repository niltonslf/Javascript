/*
 *  Introducing
 */

//creating a new object
const person = {
  name: "Nilton Lopes",
  age: 22,
  address: "Curitiba"
};

/**
 * Ways to whalk through object keys
 */

// 1 - for ... in loops
console.log("for...in lops");
for (p in person) {
  console.log("Property name:", p);
}

// 2 - Object.Keys(o)
console.log("\nObject.keys(o)");
console.log(Object.keys(person));

// 1 - Object.getOwnPropertyNames(o)
console.log("\nObject.getOwnPropertyNames(o)");
console.log(Object.getOwnPropertyNames(person));

console.log("Prototype", Object.getPrototypeOf(person));

console.log("\nshow all properties");
console.log(showAllProperties(person));

function showAllProperties(o) {
  var objectToBeInspected;
  var result = [];

  for (
    objectToBeInspected = o;
    objectToBeInspected != null;
    objectToBeInspected = Object.getPrototypeOf(objectToBeInspected)
  ) {
    result = result.concat(Object.getOwnPropertyNames(objectToBeInspected));
  }
  return result;
}

// console.log(showProps(person, "person"));
function showProps(obj, objName) {
  var result = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i}= ${obj[i]}\n`;
    }
  }
  return result;
}
