const arr = [1,2,3,4,5]

console.log(arr.reduce((accumulator, currentValue, index) => {
  return accumulator + currentValue;
}));