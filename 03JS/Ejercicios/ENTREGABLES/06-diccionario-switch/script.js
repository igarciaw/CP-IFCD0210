// diccionario switch

// Realiza un script (javascript) que solicite al usuario introducir algunas de estas palabras:
//     - casa
//     - mesa
//     - perro
//     - gato

// Luego mostrar la palabra traducida en inglés.
// Por ejemplo, si se ingresa 'casa' debemos mostrar el texto 'house' en la página.

let word = prompt('Introduce una de estas palabras: casa, mesa, perro, gato: ');

switch (word) {
  case 'casa':
    console.log('house');
    break;
  case 'mesa':
    console.log('table');
    break;
  case 'perro':
    console.log('dog');
    break;
  case 'gato':
    console.log('cat');
    break;
  default:
    console.log(
      'Has introducido "',
      word,
      '" que no se encuentra en la lista de palabras'
    );
    break;
}
