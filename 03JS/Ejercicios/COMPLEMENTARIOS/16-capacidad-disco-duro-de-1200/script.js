// 16-capacidad-disco-duro-de-1200
// Escribe un algoritmo que calcule la capacidad de un disco duro de un ordenador que tiene 1200 cilindros, 16 pistas, 8 sectores por pista y sectores de 512 bytes. Exprese su tamaño en bytes, kilobytes, megabytes y gigabytes. El tamaño del disco se calcula como:
// - capacidad = cilindros * pistas * sectores * bytes
// - Un kilobyte son 1024 bytes
// - Un megabyte son kilobyte* 1024 bytes
// - Un gigabyte es (megabyte*1024) bytes.

let cilindros = 1200;
let pistas = 16;
let sectoresQty = 8 * pistas;
let sectoresBytes = 512;

let capacidadBytes = cilindros * pistas * sectoresQty * sectoresBytes;
let capacidadKB = capacidadBytes / 1024;
let capacidadMB = capacidadKB / 1024;
let capacidadGB = capacidadMB / 1024;

console.log(capacidadBytes, "bytes");
console.log(capacidadKB, "KB")
console.log(capacidadMB, "MB");
console.log(capacidadGB, "GB");

