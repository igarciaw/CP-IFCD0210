// Vocales de una frase
// Escribe un programa en Javascript que pida una frase y escriba las vocales que aparecen

let phrase = prompt('Introduce una frase: ');
let vowels = 'aeiouAEIOU';

// Impreso vocal a vocal
for (let i = 0; i < phrase.length; i++) {
  if (vowels.includes(phrase[i])) {
    console.log(phrase[i]);
  }
}

// Impreso en una sola línea
let onlyVowels = '';
for (let i = 0; i < phrase.length; i++) {
  onlyVowels += vowels.includes(phrase[i]) ? phrase[i] : '';
}
console.log(onlyVowels);
