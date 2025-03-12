// Piedra Papel y Tijera
// Crea un programa en Javascript que simule el juego de piedra, papel y tijera.

// Para ello, la piedra se representará como 1, Papel como 2 y Tijera con 3.
// Nuestro juego tendrá 2 jugadores uno que serás tú y otro que será la máquina.
// Nuestra máquina generará una lista de valores aleatorios Piedra, Papel o Tijera (recuerda Math.random) y estos valores los compararemos con los nuestros para saber quién ha ganado de los 2.

// Recuerda que:
// Papel gana a la Piedra - Tijera gana al Papel - Piedra gana a la Tijera
// Al terminar nuestra jugada de 3 turnos deberá ganar el jugador o la máquina (bucle de 3).
// Comprueba prueba el resultado.

// Nota: En el ejercicio se puede hacer si se desea un menú.

/*****RESOLUCIÓN******/
//  Piedra: 1, Papel: 2, Tijera: 3
// Máquina genera 3 números (jugadas)
// Persona promptea 3 números
// Comparamos y mostramos el ganador

console.log('✊, 🖐️ O ✌️');
console.log('Vamos a jugar a piedra, papel o tijera contra la máquina');
console.log('Tienes que introducir 3 jugadas seguidas');
console.log('1: piedra, 2: papel, 3: tijeras');

let playerGameOne = parseInt(prompt('Introduce tu primera jugada: '));
let playerGameTwo = parseInt(prompt('Introduce tu segunda jugada: '));
let playerGameThree = parseInt(prompt('Introduce tu tercera jugada: '));
let playerGames = [playerGameOne, playerGameTwo, playerGameThree];

function getRandomNumber() {
  return Math.ceil(Math.random() * 3);
}
let machineGames = [getRandomNumber(), getRandomNumber(), getRandomNumber()];

function getName(value) {
  switch (value) {
    case 1:
      return '✊ (piedra)';
    case 2:
      return '🖐️ (papel)';
    case 3:
      return '✌️ (tijeras)';
    default:
      return '';
  }
}

function printGames(playerGames, machineGames) {
  console.log(
    `Jugador: ${getName(playerGames)} VS Máquina: ${getName(machineGames)}`
  );
}
let playerWins = 0;
let machineWins = 0;
for (let i = 0; i < 3; i++) {
  console.log(
    `---------------------\n        RONDA ${i + 1}\n---------------------`
  );
  printGames(playerGames[i], machineGames[i]);
  if (playerGames[i] === machineGames[i]) {
    console.log('🙅 Ronda empatada ');
  } else if (
    (playerGames[i] === 1 && machineGames[i] === 3) ||
    (playerGames[i] === 2 && machineGames[i] === 1) ||
    (playerGames[i] === 3 && machineGames[i] === 2)
  ) {
    playerWins++;
    console.log('🎉 Jugador ha ganado esta ronda ');
  } else {
    machineWins++;
    console.log('🥲 Máquina ha ganado esta ronda ');
  }
}
console.log('---------------------');

playerWins === machineWins
  ? console.log('🤔 Has empatado el juego 🤔')
  : playerWins > machineWins
  ? console.warn('🥳 Has ganado el juego 🥳')
  : console.error('😭 Has perdido el juego 😭');
