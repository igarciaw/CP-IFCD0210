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
    '%c¡Bienvenidx a ADIVINA EL NÚMERO! 🎉',
    'color: white; background: cornflowerblue; font-size: 12px; padding: 4px; border-radius: 5px;'
  );
  console.log(
    '%cTienes que adivinar el número entre el 1 y el 100.',
    'color: white; background: cornflowerblue; font-size: 12px; padding: 4px; border-radius: 5px;'
  );
  attempts = 0;
  randomNumber = getRandomNumber();
  runGame();
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function notValidOptionMessage(option) {
  console.error(`"${option}" no es una opción válida. Inténtalo de nuevo.`);
}

function runGame() {
  printMenu();
  let option = getOption();

  if (option === 's') {
    endGame();
  } else if (isNaN(option) || !option) {
    notValidOptionMessage(option);
    runGame();
  } else {
    checkNumber(parseInt(option));
  }
}

function getOption() {
  let input = prompt('Escribe tu elección: ');
  if (input === null) {
    return 's';
  }
  return input;
}

function printMenu() {
  console.log('');
  console.log(
    '%c---------- MENÚ -----------',
    'color: white; background:rgb(21, 109, 83); padding: 4px; font-weight: bold;'
  );
  console.log('Introduce un número entre 1 y 100');
  console.log('%cs - SALIR', 'color: red;');
  console.log('');
}

function checkNumber(number) {
  attempts++;
  if (number === randomNumber) {
    console.log(
      `%c🎉 Has acertado! El número era ${randomNumber}.`,
      'background:rgb(69, 129, 0); padding: 4px; font-size: 14px; border-radius: 5px;'
    );
    console.log(
      `%cLo has conseguido en ${attempts} intentos.`,
      'background:rgb(69, 129, 0); padding: 2px; font-size: 14px; border-radius: 5px;'
    );
    console.log(' ');

    endGame();
  } else {
    console.log(
      number < randomNumber ? 'Es un número mayor.' : 'Es un número menor.'
    );
    console.log(`Has introducido: ${number}`);
    runGame();
  }
}

function endGame() {
  printEndOrRestartGameMenu();
  let option = getOption();

  while (option !== 's' && option !== 'v') {
    notValidOptionMessage(option);
    option = getOption();
  }
  if (option === 's') {
    console.log(
      '%c 🎮 Gracias por jugar! ',
      'background: #884288; padding: 2px;'
    );
  }
  if (option === 'v') {
    console.clear();
    startGame();
  }
}

function printEndOrRestartGameMenu() {
  console.warn('Ahora puedes salir o volver a empezar');
  console.log('%cs - Salir', 'color: #ff7070; padding: 4px; ');
  console.log('%cv - Volver a empezar', 'color: #87ff7c; padding: 4px; ');
}

startGame();
