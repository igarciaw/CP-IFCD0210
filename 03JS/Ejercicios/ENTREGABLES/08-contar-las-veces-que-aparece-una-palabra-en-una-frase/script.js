// Contar las veces que aparece una palabra en una frase
// Realiza un programa en Javascript que pida una frase al usuario y pida una palabra. Se debe contar el número de veces que aparece esa palabra en la frase.

let phrase = prompt('Introduce una frase: ');
let word = prompt('Introduce una palabra: ');

let phraseClean = phrase.toLowerCase().replaceAll(',', ' ').replaceAll('.', ' ');
let phraseSplitted = phraseClean.split(' ');

let count = 0;
phraseSplitted.forEach((element) => {
  if (element === word) {
    count++;
  }
});

console.log(
  `La palabra "${word}" aparece ${count} veces en la frase "${phrase}"`
);
