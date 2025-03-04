// Año bisiesto
// Escribe un programa que calcule el año bisiesto dado un año.

// “En el calendario gregoriano, cada año bisiesto tiene 366 días en lugar de 365, al extender febrero a 29 días en lugar del común 28. Estos días adicionales ocurren en cada año que es un múltiplo entero de 4 (excepto para los años divisibles por 100, que no son años bisiestos a menos que sean divisibles por 400).”

// Es decir:

// Si un año es divisible por 400, es un año bisiesto.
// De otro modo, si un año es divisible por 100, no es un año bisiesto.
// Por ultimo, si un año es divisible por 4, es un año bisiesto.
// Por ejemplo 2004 es bisiesto, 2001 no es bisiesto.

while (true) {
  let year = parseInt(prompt('Escribe un año: '));

  if (isNaN(year)) {
    console.log('bye');
    break;
  }

  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    console.log(year + ' es un año bisiesto');
  } else {
    console.log(year + ' no es un año bisiesto');
  }
}
