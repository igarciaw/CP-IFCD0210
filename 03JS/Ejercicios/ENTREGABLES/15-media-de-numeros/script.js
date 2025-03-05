// Media de números
// Crea un programa en Javascript que pida continuamente números hasta que el usuario indique el número 0.
// Al finalizar se indicará la media de los números introducidos.
// Si no es un número se le volverá a pedir al usuario.
// Se debe mostrar un menú con la opción de comenzar el programa de la media y el de salir.

function init() {
  menu();
  let userOption = parseInt(prompt('Elige una opción:'));
  userOption == ("0" || null) ? console.log('¡Hasta la próxima!') : media();
}

function menu() {
  console.log('----------MENU-----------');
  console.log('Introduce cualquier cosa para comenzar');
  console.log('Introduce 0 en cualquier momento para salir');
  console.log('-------------------------');
}

function media() {
  let sum = 0;
  let count = 0;
  while (true) {
    const number = prompt('Introduce un número:');
    const parsedNumber = parseInt(number);
    if (isNaN(parsedNumber)) {
      console.warn(`"${number}" no es un número.`);
    } else if (parsedNumber === 0) {
      if (count === 0) {
        console.warn('No has introducido ningún numero.');
        break;
      } else {
        const media = sum / count;
        console.info(`La media de los números introducidos es: ${media}`);
        break;
      }
    } else {
      console.log(`El número introducido es: ${number}`);
      sum += parsedNumber;
      count++;
    }
  }
}

init();
