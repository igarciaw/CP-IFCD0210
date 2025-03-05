// número más grande de una lista
// Crea un programa que solicite al usuario ingresar una lista de números y luego encuentre el número más grande en esa lista.

let userList = prompt('Ingresa una lista de números separados por comas: ');
let cleanList = userList.split(',').map((num) => (num = parseInt(num)));

let maxNum = 0;
cleanList.forEach((num) => (maxNum = num > maxNum ? num : maxNum));

console.log('La lista de números que pasas es: ', userList);
console.log('El número más alto es:', maxNum);
