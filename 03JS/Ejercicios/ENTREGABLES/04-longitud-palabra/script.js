// Longitud palabra
// Realiza un programa en Javascript que dada una frase calcule el total de letras escritas.
// Para ello has de contar las letras con una variable y recorrer la frase contando su tamaño.
// No va simplemente con palabra.lenght, guiño.

let phrase = prompt('Introduce una frase: ');

let count = 0;
const alphabet = 'abcdefghijklmnñopqrstuvwxyz';

for (let i = 0; i < phrase.length; i++) {
  if (
    alphabet.includes(phrase[i]) ||
    alphabet.toUpperCase().includes(phrase[i])
  ) {
    count++;
  }
}
console.log(`La frase "${phrase}" tiene ${count} letras`);
