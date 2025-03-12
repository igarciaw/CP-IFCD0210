// Escribir un programa en Javascript que reciba un número y retorne un string de acuerdo a lo siguiente:
// fizzz si el número es múltiplo de 3
//  buzz si es múltiplo de 5
// si es múltiplo de 3 como de 5 debe mostrar fizzbuzz
// Sino es múltiplo de ninguno de los casos anteriores debe de devolver el mismo número introducido.
// Ejemplo:
// console.log(fizBuzz(6); - muestra fizz
// console.log(fizBuzz(20); - muestra buzz
// console.log(fizBuzz(30); - muestra fizzbuzz
// console.log(fizBuzz(8); - muestra 8

/******* VERSIÓN 1 - con ifelse *******/
let fizzBuzzIfElse = (val) => {
  const modulDe3 = val % 3 === 0;
  const modulDe5 = val % 5 === 0;

  if (modulDe3 && modulDe5) {
    return 'FizzBuzz';
  } else if (modulDe3) {
    return 'Fizz';
  } else if (modulDe5) {
    return 'Buzz';
  } else {
    return val;
  }
};

/******* VERSIÓN 2 con if *******/
let fizzBuzzIf = (val) => {
  let msg = '';
  if (val % 3 === 0) msg += 'Fizz';
  if (val % 5 === 0) msg += 'Buzz';
  return msg || val;
};

/******* VERSIÓN 3 con ternario *******/
let fizzBuzzTernary = (val) => {
  return val % 15 === 0
    ? 'FizzBuzz'
    : val % 3 === 0
    ? 'Fizz'
    : val % 5 === 0
    ? 'Buzz'
    : val;
};

// Muestra fizz
console.log('Versión 1 (6): ', fizzBuzzIfElse(6));
console.log('Versión 2 (6): ', fizzBuzzIf(6));
console.log('Versión 3 (6): ', fizzBuzzTernary(6));

// Muestra buzz
console.log('Versión 1 (20): ', fizzBuzzIfElse(20));
console.log('Versión 2 (20): ', fizzBuzzIf(20));
console.log('Versión 3 (20): ', fizzBuzzTernary(20));

// Muestra fizzbuzz
console.log('Versión 1 (30): ', fizzBuzzIfElse(30));
console.log('Versión 2 (30): ', fizzBuzzIf(30));
console.log('Versión 3 (30): ', fizzBuzzTernary(30));

// Muestra 8
console.log('Versión 1 (8): ', fizzBuzzIfElse(8));
console.log('Versión 2 (8): ', fizzBuzzIf(8));
console.log('Versión 3 (8): ', fizzBuzzTernary(8));

