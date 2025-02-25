// tabla de multiplicar
// Solicita un número y muestra al usuario su tabla de multiplicar

let getNumber = parseInt(prompt('Introduce un número para mostrar su tabla de multiplicar: '));


for (let i = 1; i <= 10; i++) {
    console.log(`${getNumber} x ${i} = ${getNumber * i}`);
}

//Vista de tabla
let table = {}
for (let i = 1; i <= 10; i++) {
    table[`${getNumber} x ${i}`] = getNumber * i;
}
console.table(table);