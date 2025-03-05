function esPalindromo(frase) {
    const acentos = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ü': 'u' };
    const esLetra = (char) => {
        const letras = 'abcdefghijklmnopqrstuvwxyzñ';
        return letras.includes(char);
    };

    const limpiarFrase = (str) => {
        return str
            .toLowerCase()
            .split('')
            .filter(char => esLetra(char) || Object.keys(acentos).includes(char))
            .map(char => acentos[char] || char)
            .join('');
    };

    const fraseLimpia = limpiarFrase(frase);
    const fraseReversa = fraseLimpia.split('').reverse().join('');
    return fraseLimpia === fraseReversa;
}

// Ejemplo de uso
const frase = "A mamá Roma le aviva el amor a mamá";
console.log(esPalindromo(frase)); // true