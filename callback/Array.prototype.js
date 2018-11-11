var products = [
  { name: "apples", expirationDate: new Date() },
  { name: "Milk", expirationDate: new Date() },
  { name: "Bread", expirationDate: new Date() },
  { name: "Rice", expirationDate: new Date() },
  { name: "banana", expirationDate: new Date("2018/11/10") },
  { name: "carrot", expirationDate: new Date("2018/11/10") }
];

Array.prototype.myFunction = function() {
  console.log(this);
};

var myArray = [1, 2, 3, 4];
myArray.myFunction();

console.log(Object.getPrototypeOf(myArray));
