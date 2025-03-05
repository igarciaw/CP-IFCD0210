// Contar números positivos
// Realiza un programa en Javascript que permite añadir al usuario añadir números positivos.
// Si es positivo se deberá contar el número total de números positivos añadidos.

// Se sugiere como recomendación crear un menú con
// la opción de añadir número donde se comprobará si es positivo,
// otra opción donde muestre el total de números positivos y
// una última opción para salir.

// En caso de que no fuera posible crear un bucle donde valide con un condicional que el número sea positivo y que lo acumule

function init() {
  menu();
  let userChoice = prompt('Elige una opción del menú:');
  checkUserChoice(userChoice);
}
function checkUserChoice(userChoice) {
  switch (userChoice) {
    case 'a':
      addNumber();
      break;
    case 'b':
      showPositiveNumbers();
      init();
      break;
    case 'c':
      console.log('Hasta la próxima!');
      break;
    case null:
      console.log('Hasta la próxima!');
      break;
    default:
      console.warn('Elige una opción correcta');
      init();
      break;
  }
}

function menu() {
  console.log('\n----------MENU-----------');
  console.log('a. Añadir número');
  console.log('b. Mostrar números positivos');
  console.log('c. Salir');
  console.log('-------------------------');
}

let positiveNumbers = [];

function addNumber() {
  console.log('\n----------AÑADIR NÚMERO-----------');
  while (true) {
    let input = prompt('Introduce un número o una opción del menú:');
    let parseInput = parseInt(input);
    if (isNaN(parseInput)) {
      checkUserChoice(input);
      break;
    } else if (parseInput < 0) {
      console.warn(`"${parseInput}" no es un número positivo.`);
    } else {
      positiveNumbers.push(parseInput);
      console.log(`El número ${parseInput} ha sido introducido.`);
    }
  }
}
function showPositiveNumbers() {
  console.log('\n----------NÚMEROS POSITIVOS-----------');
  let message = '';
  positiveNumbers.forEach((num) => (message += num + ', '));
  positiveNumbers.length > 0
    ? console.log(
        `Los números positivos introducidos son: ${message.slice(0, -2)}`
      )
    : console.warn('No has introducido ningún número positivo.');
  console.log('');
}

init();
