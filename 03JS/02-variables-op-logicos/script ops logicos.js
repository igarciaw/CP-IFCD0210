// let num1 = parseInt(prompt('Numero 1: '));
// let num2 = parseInt(prompt('Numero 2: '));

//  Cuál es el número mayor de los introducidos?
// 300, 1, 500
let mayor;
if (num1 > num2) {
  mayor = num1;
} else {
  mayor = num2;
}

console.log(
  'Los números introducidos son: ',
  num1,
  ' y ',
  num2,
  'El número mayor es: ',
  mayor
);

// let num3 = parseInt(prompt('Numero 3: '));

// mayor = num1 > num2 ? num1 : num2;
// mayor = mayor > num3 ? mayor : num3;

if (num1 > num2) {
  mayor = num1;
} else {
  mayor = num2;
}
if (num3 > mayor) {
  mayor = num3;
}

console.log(
  'Los números introducidos son: ',
  num1,
  ', ',
  num2,
  ' y ',
  num3,
  'El número mayor es: ',
  mayor
);

let numero = 5;
let verdadero = true;
let letra = 'c';
let letranumero = '7';
let resultado = numero + letra;
resultado = numero + +letranumero;
console.log(resultado);

resultado = numero + verdadero;
console.log(resultado);
