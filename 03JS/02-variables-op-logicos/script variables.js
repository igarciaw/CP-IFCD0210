let numero = 5;
let verdadero = true;
let letra = 'c';
let letranumero = '7';

let resultado = numero + letra;
console.log('numero + letra: ', resultado); // 5c

resultado = numero + letranumero; // 57
console.log('numero + letranumero: ', resultado);

resultado = numero + +letranumero; // 12
console.log('numero + +letranumero: ', resultado);

resultado = numero + verdadero; // 6
console.log('numero + verdadero: ', resultado);

resultado = letra + verdadero; // ctrue
console.log('letra + verdadero: ', resultado);

resultado = 5 + 9 * 8 + 3 - 7 ** 6 + 4;
console.log('5 + 9 * 8 + 3 - 7 ** 6 + 4: ', resultado);

function sumar(n1, n2) {
  resultado = n1 + n2;
  return resultado;
}

let suma = 0;
suma = sumar(3, 4);
console.log(suma);
suma = sumar(5, 6);
console.log(suma);
suma = sumar(8, 9);
console.log(suma);
suma = sumar(9, 1);
console.log(suma);

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  
}

do {
  
} while (condition);