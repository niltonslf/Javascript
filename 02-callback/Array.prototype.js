var products = [
  { name: "apples", expirationDate: new Date() },
  { name: "Milk", expirationDate: new Date() },
  { name: "Bread", expirationDate: new Date() },
  { name: "Rice", expirationDate: new Date() },
  { name: "banana", expirationDate: new Date("2018/11/10") },
  { name: "carrot", expirationDate: new Date("2018/11/10") }
];

// products.map(elem => {
//   console.log(elem);
// });

// Array.prototype.myFunction = function() {
//   console.log(this);
// };

Array.prototype.myFunctionArrow = () => {
  console.log(this);
};

products.myFunctionArrow();
