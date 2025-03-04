// Lista inversa
// Realiza un programa en Javascript que dada una lista muestre como resultado otra lista en orden inverso.

// Para ese ejecicio, no se podrá usar. lista.reverse, guiño. Se pretende crear otra lista donde se vayan añadiendo los elementos de la primera lista y nos quede la lista en orden inverso ( por ejemplo recorriendo mediante un bucle for...)

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let invertedList = [];

for (let i = 1; i <= list.length; i++) {
  let indexInverted = list.length - i;
  invertedList.push(list[indexInverted]);
}

console.log(invertedList);
