// 01-resultado-operando-1
// ¿Cuál es el resultado de: `true && false`? FALSE

console.log(true && false);

// 02-resultado-operando-2
// ¿Cuál es el resultado de:  `3 > 2 || 3 < 2`? TRUE
console.log(3 > 2 || 3 < 2);

// 03-resultado-operando-3
// ¿Cuál es el resultado de:  `(("true" || 0) && !(false && 3 < 4)) || (-8 + 3)`? TRUE
// (true && true) || true
console.log((('true' || 0) && !(false && 3 < 4)) || -8 + 3);

// 04-resultado-operando-4
// ¿Cuál es el resultado de:  `false || 3 < 4 || 13`? TRUE
console.log(false || 3 < 4 || 13);

// 05-resultado-operando-5
// ¿Cuál es el resultado de:  `4 != 5 && !(!(false))` ? FALSE
console.log(4 != 5 && !!false);

// 06-resultado-operando-6
// ¿Cuál es el resultado de:  `!(null && undefined)` ? TRUE
console.log(!(null && undefined));
