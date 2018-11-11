/**
 *  UNDERSTANDING CALLBACK
 */

/**
 * Recebe um função messageType e um nome então executa a messageType como callback passando a variável name como parâmetro.
 * @param {*} messageType função com o tipo de mensagem
 * @param {*} name Nome que será exibido
 */
function showName(messageType, name) {
  messageType(name);
}

/**
 * Recebe um name como argumento exibindo-o dentro de uma mensagem de texto simples.
 * @param {*} name
 */
function textMessage(name) {
  console.log(`Hello ${name}`);
}

/**
 * Recebe um name como argumento exibindo-o dentro de alerta
 * @param {*} name
 */
function alertMessage(name) {
  alert(`Hello ${name}`);
}

/*
 * Testando a função
 */

// testando com o primeiro tipo de mensagem
showName(textMessage, "Morre Cedo");
// testando com o segundo tipo de mensagem
// showName(alertMessage, "Morre Cedo");

/**
 *  TESTING SOME EXAMPLES
 */

/**
 * chama a função message retornando somente os produtos com
 * a data de validade em dia. Em seguinda, passa a função responsável por
 * exibir a mensagem
 * @param {*} arrItems
 * @param {*} message
 * @param {*} showMessage
 */
function verifyExpirationDate(arrItems, message, showMessage) {
  message(
    arrItems.filter(item => item.expirationDate >= new Date()),
    showMessage
  );
}

/**
 *  Recebe um array de items e uma função  para exibi-los
 * @param {*} items
 * @param {*} showMessage
 */
function message(items, showMessage) {
  showMessage(
    items.map(item => `the product: ${item.name} is on the expiration date.`)
  );
}

/**
 * Recebe um array de items e exibe-os através de console.log
 * @param {*} items
 */
function showMessage(items) {
  items.forEach(item => {
    console.log(item);
  });
}

// testing
var products = [
  { name: "apples", expirationDate: new Date() },
  { name: "Milk", expirationDate: new Date() },
  { name: "Bread", expirationDate: new Date() },
  { name: "Rice", expirationDate: new Date() },
  { name: "banana", expirationDate: new Date("2018/11/10") },
  { name: "carrot", expirationDate: new Date("2018/11/10") }
];

// verifyExpirationDate(products, message, showMessage);

verifyExpirationDate(products, message, () => {
  console.log(`Total items: ${products.length}`);
});

/**
 *  ANOTHER TEST
 */
console.log("\nAnother test\n");
const uploadFn = require("./uploadFunction");

function submitedFile(err, response) {
  if (err) console.log(err);
  console.log(response);
}

var request = false;
uploadFn.upload(request, submitedFile);
