// Calcular salario
// Crea un programa en Javascript que pida al usuario su nombre, apellidos, la edad y salario.

// Si el salario es mayor de 2000 euros no cambiará
// Si el salario está entre 1000 y 2000 se deberá tener en cuenta:
//    Si la edad es superior a 45 años se sube un 3%
//    Si la edad es menor de 45 o igual se sube un 10%
// Si el salario indicado es menor de 1000 se deberá tener presente:
//    Los menores de 30 cobran exactamente 1100 euros
//    Si la edad está entre 30 a 45 años el salario sube un 3%
//    Si la edad es superior a 45 años se sube un 15%

let name = prompt('Introduce tu nombre:');
let lastName = prompt('Introduce tus apellidos:');
let age = parseInt(prompt('Introduce tu edad:'));
let salary = parseFloat(prompt('Introduce tu salario en euros:'));
console.log(`Hola ${name}, tienes ${age} años y un salario de ${salary} €`);

let newSalary = 0;

if (salary > 2000) {
  newSalary = salary;
} else if (salary >= 1000 && salary <= 2000) {
  if (age > 45) {
    newSalary = salary + salary * 0.03;
  } else {
    newSalary = salary + salary * 0.1;
  }
} else {
  if (age < 30) {
    newSalary = 1100;
  } else if (age >= 30 && age <= 45) {
    newSalary = salary + salary * 0.03;
  } else {
    newSalary = salary + salary * 0.15;
  }
}