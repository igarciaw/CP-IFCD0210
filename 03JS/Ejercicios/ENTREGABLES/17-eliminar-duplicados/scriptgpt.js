// Eliminar duplicados
// Realiza un programa en Javascript que permita al usuario introducir una lista de números.
// Estos números al introducirlos habrá que comprobar si existe algún de ellos y si es así añadir en otra lista el número duplicado.

// Posteriormente habrá que comparar la lista original con la lista de los duplicados y eliminar el elemento de la lista ( o marcar como borrado).

function procesarNumeros(numeros) {
    let listaOriginal = [...numeros];
    let listaDuplicados = [];
    let mapaFrecuencia = {};

    // Contar la frecuencia de cada número
    numeros.forEach(num => {
        mapaFrecuencia[num] = (mapaFrecuencia[num] || 0) + 1;
    });

    // Identificar duplicados
    for (let num in mapaFrecuencia) {
        if (mapaFrecuencia[num] > 1) {
            listaDuplicados.push(Number(num));
        }
    }

    // Marcar duplicados como "borrado" en la lista original
    let listaModificada = listaOriginal.map(num => 
        listaDuplicados.includes(num) ? "borrado" : num
    );

    console.log("Lista original:", listaOriginal);
    console.log("Lista de duplicados:", listaDuplicados);
    console.log("Lista modificada:", listaModificada);
}

// Ejemplo de uso
let numerosUsuario = [1, 2, 3, 4, 2, 5, 3, 6, 7, 8, 3];
procesarNumeros(numerosUsuario);
