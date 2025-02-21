// 11-calcular-la-area-de-un-cilindro
// Escribe un algoritmo que calcule el área de un cilindro de radio y altura. La constante es PI es 3.1416. Efectúe varios cálculos para probar que funciona bien

const PI = 3.1416;

// área 2π rh + 2πr².

let r = parseInt(prompt('Cuál es el radio en cm?: '));
let h = parseInt(prompt('Cuál es la altura en cm?: '));

let area = 2 * PI * r * h + 2 * PI * r ** 2;

console.log(
  `Para un radio de ${r}cm y una altura de ${h}cm obtenemos un área de ${area} cm2`
);
