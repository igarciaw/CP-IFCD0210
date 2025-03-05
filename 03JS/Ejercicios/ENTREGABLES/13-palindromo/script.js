// Palíndromo
// Crea un programa en Javascript que indique si una palabra es un palíndromo.

// Un palíndromo es un texto que se lee igual de derecha a izquierda que de izquierda a derecha. Hay que tener en cuenta que se ignoran los signos de puntuación (espacios, interrograciones, comas, puntos así como las tildes o diéresis y no se distingue entre mayúsculas y minúsculas.
// Ejemplos de palíndromos: Luz azul ; Logré ver gol.

let signsOfTipping = ' ¡!¿?,.;:-_"';
let accents = 'áäéëíïóöúü';
let withoutAccents = 'aaeeiioouu';

let text = prompt('Introduce una palabra: ');

let cleanText = '';

for (let i = 0; i < text.length; i++) {
  let char = text[i].toLowerCase();

  if (!signsOfTipping.includes(char)) {
    if (accents.includes(char)) {
      let index = accents.indexOf(char);
      cleanText += withoutAccents[index];
    } else {
      cleanText += char;
    }
  }
}

let cleanTextReversed = cleanText.split('').reverse().join('');
cleanText == cleanTextReversed
  ? console.log(`"${text}" es un palíndromo`)
  : console.log(`"${text}" no es un palíndromo`);
