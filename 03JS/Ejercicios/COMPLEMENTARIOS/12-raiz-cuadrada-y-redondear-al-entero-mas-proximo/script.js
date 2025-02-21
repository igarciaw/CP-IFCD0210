// 12-raiz-cuadrada-y-redondear-al-entero-mas-proximo
// Escribe un algoritmo que introducido un número debe calcular su raíz cuadrada y la redondee al entero más próximo (por ejemplo: 2 para 2.3 y 3 para 2.7) e imprima (muestre) los resultados

let number = parseInt(
  prompt('Introduce un número para calcular su raíz cuadrada: ')
);
let raizCuadrada = Math.sqrt(number);
let redondearAEnteroMasProximo = Math.round(raizCuadrada);
// console.log(redondearAEnteroMasProximo);

// En una línea
let raizRedondeada = Math.round(Math.sqrt(number));
console.log('La raíz cuadrada de ' + number + ' es: ' + raizRedondeada);
alert('La raíz cuadrada redondeada de ' + number + ' es: ' + raizRedondeada);
