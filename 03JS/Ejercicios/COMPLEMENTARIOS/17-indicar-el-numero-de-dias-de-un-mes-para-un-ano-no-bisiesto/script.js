// 17-indicar-el-numero-de-dias-de-un-mes-para-un-ano-no-bisiesto
// Diseña una algoritmo que indice el número de días que tiene un mes atendiendo a que los meses abril,junio,septiembre y noviembre tienen 30 días. El mes de febrero tiene 28 días y el resto de los meses tienen 31 días.

let month = prompt('Introduce un mes').toLowerCase();

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

switch (month) {
  case 'enero':
    console.log(capitalize(month), ' tiene 31 días');

    break;
  case 'febrero':
    console.log(capitalize(month), ' tiene 28 días');

    break;
  case 'marzo':
    console.log(capitalize(month), ' tiene 31 días');

    break;
  case 'abril':
    console.log(capitalize(month), ' tiene 30 días');

    break;
  case 'mayo':
    console.log(capitalize(month), ' tiene 31 días');

    break;
  case 'junio':
    console.log(capitalize(month), ' tiene 30 días');

    break;
  case 'julio':
    console.log(capitalize(month), ' tiene 31 días');

    break;
  case 'agosto':
    console.log(capitalize(month), ' tiene 31 días');

    break;
  case 'septiembre':
    console.log(capitalize(month), ' tiene 30 días');

    break;
  case 'octubre':
    console.log(capitalize(month), ' tiene 31 días');

    break;
  case 'noviembre':
    console.log(capitalize(month), ' tiene 30 días');

    break;
  case 'diciembre':
    console.log(capitalize(month), ' tiene 31 días');

    break;

  default:
    console.log('"', month, '" no es un mes válido');

    break;
}
