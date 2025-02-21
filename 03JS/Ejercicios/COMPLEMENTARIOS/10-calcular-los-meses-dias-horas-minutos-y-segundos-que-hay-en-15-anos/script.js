// 10-calcular-los-meses-dias-horas-minutos-y-segundos-que-hay-en-15-anos
// Diseña un algoritmo que calcule los meses, días, horas, minutos y segundos que hay en 15 años.

// Un año tiene 365 días
// Cada 4 años hay un bisiesto, por lo tanto, un día más
// Un día tiene 24h
// Una hora tiene 60 minutos
// Un minuto tiene 60 segundos

let years = parseInt(prompt('¿Cuántos años quieres calcular?: '));
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

for (let i = 1; i <= years; i++) {
  days += i % 4 === 0 ? 366 : 365;
  hours = days * 24;
  minutes = hours * 60;
  seconds = minutes * 60;
}

console.log(
  `${years} años son: ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`
);
