// 09-escoge-porcentaje
// Diseña un algoritmo que escriba el porcentaje de descuento en una compra (lo elige usuario).
// Debes calcular el precio del producto descontando su porcentaje

let precio = parseInt(prompt('¿Cuál es el precio?: '));
let porcentajeDescuento = parseInt(
  prompt(
    'El producto vale' +
      precio +
      '€, ¿qué porcentaje quieres aplicar de descuento?: '
  )
);

let descuento = (porcentajeDescuento * precio) / 100;
let precioDescontado = precio - descuento;

alert(
  'Precio: ' +
    precio +
    '€. Descuento del ' +
    porcentajeDescuento +
    '%: ' +
    descuento +
    '€. Precio final: ' +
    precioDescontado +
    '€'
);

console.log(
  'Precio: ',
  precio,
  '€. Descuento del ',
  porcentajeDescuento,
  '%: ',
  descuento,
  '€. Precio final: ',
  precioDescontado,
  '€'
);
