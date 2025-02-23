// 15-vocal-o-consonante
// Diseña un algoritmo que solicite al usuario una letra y que indique si es vocal o consonante.

const vocales = 'aeiou';
let letra = prompt('Introduce una letra: ');

if (vocales.includes(letra)) {
  console.log(letra, ' es una vocal');
  alert(letra + ' es una vocal');
} else {
  console.log(letra, ' es una consonante');
  alert(letra + ' es una consonante');
}
