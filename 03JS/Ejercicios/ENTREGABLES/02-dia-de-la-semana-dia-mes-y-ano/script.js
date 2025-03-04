// Día de la semana, día mes y año
// Escribe un programa en Javascript que dado el número de la semana:
// - Escriba que día de la semana es.
// Es decir, el día 1 será lunes, el día 2 será martes, el día 3 será miércoles, el día 4 será jueves, el día 5 será viernes, el día 6 será sábado y el día 7 será domingo.

// - Dado el número del mes escriba su mes.
// Es decir si el número del mes es 1 es Enero, si el número del mes es 2 es Febrero, ... hasta llegar al 12 que será diciembre.

// Ejemplo:
// Escribe número de la semana: 1
// Escribe número del mes: 4
// Escribe año: 2024
// Resultado: Lunes de Marzo de 2024

let day = parseInt(prompt('Escribe el número del día de la semana: '));
let month = parseInt(prompt('Escribe el número del mes: '));
let year = parseInt(prompt('Escribe año: '));

const days = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
];
const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

console.log(`${days[day - 1]} de ${months[month - 1]} de ${year}`);
