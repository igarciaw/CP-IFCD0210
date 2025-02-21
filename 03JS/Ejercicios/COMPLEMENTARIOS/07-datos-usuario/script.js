// 07-datos-usuario
// Escribe un algoritmo que:
// - Defina el nombre de una persona
// - Si tiene estudios o no
// - Si tiene hijos o no
// - Si es hombre o mujer o no.
// Usa las variables lógicas (booleanos:true o false) para indicar las opciones de "sí o no"

let nombre = prompt('Introduce tu nombre: ');
let estudios = prompt('Tienes estudios? (si o no): ') === 'si' ? true : false;
let hijos = prompt('Tienes hijos? (si o no): ') === 'si' ? true : false;
let sexo = prompt('Eres hombre o mujer? (si o no): ') === 'si' ? true : false;

console.log(
  `Eres ${nombre}. ${estudios ? 'Tienes' : 'No tienes'} estudios, ${
    hijos ? 'tienes' : 'no tienes'
  } hijos y ${sexo ? 'eres' : 'no eres'} hombre o mujer.`
);
