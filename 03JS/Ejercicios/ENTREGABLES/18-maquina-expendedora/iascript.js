// Máquina expendedora
// Simula el funcionamiento de una máquina expendedora de una estación de tren.
// Nuestra máquina expendedora tendrá un array de Productos, otro Array de precios con el dinero a cambiar:
//  1,2, 5,10, 20, 50.  Para devolver el dinero deberemos dar primero las unidades mayores y posteriormente ir devolviendo hasta llegar a las menores. Si compramos un bocadillo de nuestra máquina expendedora nos costará 8,
// si compramos una coca cola 5,
// si compramos un agua 1,
//  si compramos un coca cao 2,
// si compramos unos auriculares  38,
//  si compramos unas gafas megachulas nos contarán 70,
// si compramos un coche teledirigido nos costará 88   
// Si intentamos comprar un producto que no podemos darle cambio no nos dejará, en el algoritmo no se tiene en cuenta el dinero que contiene la máquina expendedora, solo se considera que devuelva correctamente en caso de no poder devolverse el producto, no dará el producto.
// nota: si se desea se puede crear un menú

const productos = ['bocadillo', 'coca cola', 'agua', 'colacao', 'auriculares', 'gafas megachulas', 'coche teledirigido'];
const precios = [8, 5, 1, 2, 38, 70, 88];

const monedas = [1, 2, 5, 10, 20, 50];

function comprarProducto(producto, dinero) {
    const index = productos.indexOf(producto);
    if (index === -1) {
        return 'Producto no encontrado';
    }

    const precio = precios[index];

    if (dinero < precio) {
        return 'Dinero insuficiente';
    }

    let cambio = dinero - precio;
    const cambioEntregado = [];

    for (let moneda of monedas.reverse()) {
        while (cambio >= moneda) {
            cambio -= moneda;
            cambioEntregado.push(moneda);
        }
    }

    if (cambio > 0) {
        return 'No se puede dar el cambio exacto';
    }

    return `Producto comprado: ${producto}. Cambio: ${cambioEntregado.join(', ')}`;
}

// Ejemplo de uso
console.log(comprarProducto('bocadillo', 10)); // Producto comprado: bocadillo. Cambio: 2
console.log(comprarProducto('coche teledirigido', 100)); // Producto comprado: coche teledirigido. Cambio: 10, 2
console.log(comprarProducto('agua', 1)); // Producto comprado: agua. Cambio: 
console.log(comprarProducto('gafas megachulas', 50)); // Dinero insuficiente


