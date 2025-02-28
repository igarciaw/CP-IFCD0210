// Adivinar número
// Haz un programa en Javascript que implemente un número aleatorio que deberá adivinar el usuario, para ello:

// El número deberá estar comprendido entre 1 al 100
// Se preguntará al usuario por el número y habremos de verificar que sea un número antes de dejar que lo introduzca
// Se indicará al usuario si acertó y el número de intentos al terminar el juego
// Se deberá permitir cancelar el juego
// Se deberá permitir volver a empezar el juego con un menú de empezar Juego y Salir

let randomNumber;
let attempts;

function startGame() {
  console.log(
    `¡¡¡Bienvenidx!!! 
    Vamos a jugar a "ADIVINA EL NUMERO".
    Tienes que adivinar en qué número estoy pensando entre el 1 y el 100.`
  );
  attempts = 0;
  randomNumber = getRandomNumber();
  console.log(randomNumber);
  runGame();
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function runGame() {
  printMenu();
  let option = prompt('Escribe un número o una opción del menu: ');
  isNaN(option) || !option
    ? manageOption(option)
    : checkNumber(parseInt(option));
}

function printMenu() {
  console.log('----------ADIVINA EL NÚMERO-----------');
  console.log('Introduce un número entre 1 y 100');
  console.log('R - RESTART - Empezar de nuevo');
  console.log('E - EXIT - Salir');
}

function manageOption(option) {
  let restartOptions = ['r', 'R', 'RESTART'];
  let isRestarting = restartOptions.includes(option);
  let exitOptions = ['e', 'E', 'EXIT'];
  let isExiting = exitOptions.includes(option);

  if (isRestarting) {
    startGame();
  } else if (isExiting) {
    console.log('Hasta luego, MariCarmen');
  } else {
    console.log(`Has introducido "${option}", introduce una opción válida`);
    runGame();
  }
}

function checkNumber(number) {
  attempts++;
  if (number === randomNumber) {
    console.log('Has acertado en ' + attempts + ' intentos');
  } else {
    console.log('No has acertado, vuelve a intentarlo.');
    runGame();
  }
}

startGame();
