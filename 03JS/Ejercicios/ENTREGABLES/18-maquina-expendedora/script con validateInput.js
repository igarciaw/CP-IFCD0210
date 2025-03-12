// Máquina expendedora
// Simula el funcionamiento de una máquina expendedora de una estación de tren.
// Nuestra máquina expendedora tendrá un array de Productos, otro Array de precios con el dinero a cambiar:
//  1,2, 5,10, 20, 50.  Para devolver el dinero deberemos dar primero las unidades mayores y posteriormente ir devolviendo hasta llegar a las menores. Si compramos un bocadillo de nuestra máquina expendedora nos costará 8,
// si compramos una coca cola 5,
// si compramos un agua 1,
//  si compramos un coca cao 2,
// si compramos unos auriculares  38,
//  si compramos unas gafas megachulas nos contarán 70,
// si compramos un coche teledirigido nos costará 88
// Si intentamos comprar un producto que no podemos darle cambio no nos dejará, en el algoritmo no se tiene en cuenta el dinero que contiene la máquina expendedora, solo se considera que devuelva correctamente
// en caso de no poder devolverse el dinero, no dará el producto.
// nota: si se desea se puede crear un menú

// VARIABLES
const products = [
  'Bocadillo',
  'Coca cola',
  'Agua',
  'Colacao',
  'Auriculares',
  'Gafas megachulas',
  'Coche teledirigido',
];
const prices = [8, 5, 1, 2, 38, 70, 88];
const machineCoins = [1, 2, 5, 10, 20, 50];

// product
let productNumber;
let productSelected = '';
let productPrice = 0;
// user coins
let inserting = false;
let coin;
let coinsInserted = [];
let totalAmount = 0;

// FUNCIONES

//// Impresión del menú de productos de la máquina
function menuMachine() {
  for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1}.- ${products[i]}: ${prices[i]}€`);
  }
}
//// Validar input con while hasta que el usuario introduzca opción válida
function validateInput(element, array, input, func) {
  while (!array.includes(element)) {
    console.warn(`"${input}" no es una opción válida.`);
    func();
  }
}
//// Usuario elige qué producto quiere
function userSelection() {
  const productInput = prompt(
    'Introduce el número del producto que quieres comprar:'
  );
  productNumber = isNaN(parseInt(productInput))
    ? productInput
    : parseInt(productInput);
  productSelected = products[productNumber - 1];
  productPrice = prices[productNumber - 1];
}

function productSelection() {
  userSelection();
  validateInput(productSelected, products, productNumber, userSelection);
  console.log(
    `Has elegido: ${productNumber} ${productSelected}. Precio: ${productPrice}€`
  );
}

//// Usuario introduce monedas
function insertCoin() {
  const coinInput = prompt(
    `Puedes:
    - Introducir moneda. Monedas disponibles: ${machineCoins}.
    - Marcar 0 si no quieres introducir moneda.`
  );
  coin = isNaN(parseInt(coinInput)) ? coinInput : parseInt(coinInput);
}
function insertCoins() {
  while (inserting) {
    insertCoin();
    if (coin === 0) {
      inserting = false;
      return;
    }
    validateInput(coin, machineCoins, coin, insertCoin)

    // Añadir moneda a Array e imprimir info al usuario
    coinsInserted.push(coin);
    totalAmount = coinsInserted.reduce((a, b) => a + b, 0);
    console.log(`Moneda insertada: ${coin}. Total: ${totalAmount}€`);
    console.log(`Precio del producto: ${productPrice}€`);
  }
}

//// Entrega de producto y devolución monedas
function returnCoins() {
  // Mientras total introducido < precio  -> aviso y se permite introducir más monedas o cancelar
  while (totalAmount < productPrice) {
    let askUser = tryAgain();
    if (askUser) {
      inserting = true;
      insertCoins();
    } else {
      console.log(
        `Cancelado. No olvides recoger tus monedas de vuelta: ${coinsInserted.toString()}`
      );
      return;
    }
  }

  // Si total introducido = precio -> entrega de producto y fin de programa
  if (totalAmount === productPrice) {
    console.log(
      `Tu producto "${productSelected}" ha sido entregado. Precio pagado exacto, no hay devolución de monedas.`
    );
    return;
  }
  // Si total introducido > precio -> entrega de producto y devolución del cambio
  let coinsToReturn = [];
  let diference = totalAmount - productPrice;
  for (let i = machineCoins.length - 1; i >= 0; i--) {
    while (diference >= machineCoins[i]) {
      coinsToReturn.push(machineCoins[i]);
      diference -= machineCoins[i];
    }
  }
  let totalReturned = coinsToReturn.reduce((a, b) => a + b, 0);
  console.log(
    `Monedas devueltas: ${coinsToReturn}. Total devuelto: ${totalReturned}€
    Producto "${productSelected}" entregado, no olvides recogerlo.`
  );
  console.log('Gracias por tu compra');
}
function tryAgain() {
  console.warn(`Faltan ${productPrice - totalAmount}€`);
  const userInput = prompt('¿Quieres introducir más monedas? (s/n)');
  const validOptions = ['s', 'n'];
  validateInput(userInput, validOptions, userInput, returnCoins);

  return userInput === 's';

  if (userInput === 's') {
    inserting = true;
    insertCoins();
  } else {
    inserting = false;
    console.log(
      `Cancelado. No olvides recoger tus monedas de vuelta: ${coinsInserted.toString()}`
    );
    return;
  }
}
function init() {
  menuMachine();
  productSelection();
  inserting = true;
  insertCoins();
  returnCoins();
}
init();
