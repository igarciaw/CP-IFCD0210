// Array de productos con sus precios
const productos = [
  { nombre: 'Bocadillo', precio: 8 },
  { nombre: 'Coca Cola', precio: 5 },
  { nombre: 'Agua', precio: 1 },
  { nombre: 'Coca Cao', precio: 2 },
  { nombre: 'Auriculares', precio: 38 },
  { nombre: 'Gafas megachulas', precio: 70 },
  { nombre: 'Coche teledirigido', precio: 88 }
];

// Array de precios para devolver el cambio
const monedas = [50, 20, 10, 5, 2, 1];

// Función para devolver el cambio
function devolverCambio(monto) {
  const cambio = [];
  for (let i = 0; i < monedas.length; i++) {
    while (monto >= monedas[i]) {
      cambio.push(monedas[i]);
      monto -= monedas[i];
    }
  }
  return cambio;
}

// Función para comprar un producto
function comprarProducto(producto, montoPagado) {
  if (montoPagado < producto.precio) {
    console.log('No tienes suficiente dinero para comprar este producto');
    return;
  }
  const cambio = devolverCambio(montoPagado - producto.precio);
  if (cambio.length === 0) {
    console.log('No se puede devolver el cambio');
    return;
  }
  console.log(`Has comprado ${producto.nombre} por ${producto.precio}€`);
  console.log(`Te devuelvo ${cambio.join(', ')}€ de cambio`);
}

// Ejemplo de uso
const producto = productos[0]; // Bocadillo
const montoPagado = 10;
comprarProducto(producto, montoPagado);