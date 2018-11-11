// ALL RETURN FALSE
//undefined
var animal;
console.log(animal ? true : false);
//null
var nullable = null;
console.log(nullable ? true : false);
//0
var zero = 0;
console.log(zero ? true : false);
//empty string
var empty = "";
console.log(empty ? true : false);

// ALL RETURN TRUE
//undefined
var cat = "Gato";
console.log(cat ? true : false);
//null
var notNull = "not null";
console.log(notNull ? true : false);
var obj = { name: "Morre Cedo" };
console.log(obj ? true : false);
//empty obj
var objEmpty = {};
console.log(objEmpty ? true : false);
//0
var oone = 1;
console.log(zero ? true : false);


