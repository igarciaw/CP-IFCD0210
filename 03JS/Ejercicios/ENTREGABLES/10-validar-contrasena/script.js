// validar contraseña
// Realiza un programa en Javascript que pida un nombre y una contraseña.

// El nombre del usuario puede estar formado por letras minúsculas y números sino indicaremos que existe un error y lo volveremos a pedir.
// La contraseña debe contener al menos un elemento de los siguientes:
//    Una letra mayúscula
//    Una letra manúscula
//    Un número
//    Un carácter especial (guión,asterisco)

const alphabetLowercase = 'abcdefghijklmnñopqrstuvwxyz';
const specialChars = '-*';

function requestAndCheckUsername() {
  let username = prompt('Introduce un nombre nombre de usuario: ');
  while (!isValidUsername(username)) {
    console.warn(`"${username}" no es un nombre de usuario valido`);
    username = prompt('Nombre inválido. Usa solo minúsculas o números:');
  }

  function isValidUsername(username) {
    if (!username) {
      return false;
    }
    for (const char of username) {
      if (!alphabetLowercase.includes(char) && isNaN(char)) {
        return false;
      }
    }
    return true;
  }

  console.info(`"${username}" es un nombre de usuario válido.`);
}

function requestAndCheckPassword() {
  let password = prompt('Introduce una contraseña: ');

  while (!isValidPassword(password)) {
    console.warn(`"${password}" no es una contraseña valida`);
    password = prompt(
      'Contraseña inválida. Usa al menos una minúscula, una mayúscula, un número y un carácter especial (- o *)'
    );
  }

  function isValidPassword(password) {
    let haveLowercase = 0;
    let haveUppercase = 0;
    let haveNumber = 0;
    let haveSpecialChar = 0;

    for (const char of password) {
      haveLowercase += alphabetLowercase.includes(char);
      haveUppercase += alphabetLowercase.toUpperCase().includes(char);
      haveNumber += !isNaN(char);
      haveSpecialChar += specialChars.includes(char);
    }
    if (!haveLowercase || !haveUppercase || !haveNumber || !haveSpecialChar) {
      return false;
    }
    return true;
  }

  console.info(`"${password}" es un contraseña válida.`);
}

requestAndCheckUsername();
requestAndCheckPassword();
