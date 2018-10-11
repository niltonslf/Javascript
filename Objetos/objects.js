const person = {
  name:"Nilton Lopes",
  age: 22,
  address: "Curitiba"
}

// console.log(person.hasOwnProperty("work"))
console.log(mostrarProps(person, "person"));

function mostrarProps(obj,nomeDoObj){
  var resultado = ''
  for(var i in obj){
   if(obj.hasOwnProperty(i)){
     resultado += `${nomeDoObj}.${i}= ${obj[i]}\n`;
   }
  }
  return resultado
}