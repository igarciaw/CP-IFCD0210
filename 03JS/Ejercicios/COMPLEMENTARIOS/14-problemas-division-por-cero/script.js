// 14-problemas-division-por-cero
// Comprueba que ocurre cuando dividimos un número por 0. Prueba cualquier número positivo dividido por 0, 0 dividido entre cualquier valor positivo y 0 dividido entre 0. ¿Qué crees que podemos hacer para evitar estos problemas?. Propón una solución


console.log(5 / 0); // Infinity
console.log(-5 / 0); // Infinity
console.log(0 / 5); // 0
console.log(0 / 0); // NaN

// Solución: comprobar siempre que el divisor sea distinto de 0. Dar un mensaje de alerta al usuario de que no se puede dividir por 0 y dar opción a introducir otro número.