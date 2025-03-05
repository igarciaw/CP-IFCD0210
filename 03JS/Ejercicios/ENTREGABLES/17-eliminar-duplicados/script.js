// Eliminar duplicados
// Realiza un programa en Javascript que permita al usuario introducir una lista de números.
// Estos números al introducirlos habrá que comprobar si existe algún de ellos y si es así añadir en otra lista el número duplicado.

// Posteriormente habrá que comparar la lista original con la lista de los duplicados y eliminar el elemento de la lista ( o marcar como borrado).

// Cómo lo he resuelto yo:
// 1. Pedir la lista de números
// 2. Limpiar la lista (crear un array de cada elemento encontrado entre comas y parsear)
// 3. Comprobar si la lista es correcta.
//      Si es null (botón de cancelar) o hay algún NaN, se vuelve a solicitar.
//      Si es correcta se manda a gestionar duplicados
// 4.Busca los duplicados y crear una lista sin los duplicados
// 5. Se consolean los mensajes según si hay o no duplicados y si quedan o no números sin duplicar en la lista original

function init() {
  let userList = prompt('Ingresa una lista de números separados por comas: ');
  let cleanedList = cleanList(userList);
  checkList(userList, cleanedList);
}

function cleanList(userList) {
  return userList == null
    ? null
    : userList.split(',').map((num) => (num = parseInt(num)));
}

function checkList(userList, cleanedList) {
  if (cleanedList == null) {
    console.log('Bye');
    return;
  } else if (cleanedList.length == 0 || cleanedList.includes(NaN)) {
    console.log(`Has introducido: "${userList}"`);
    console.warn(
      'La lista está vacía o contiene errores, vuelve a introducirla.'
    );
    init();
  } else {
    manageDuplicates(cleanedList);
  }
}

function manageDuplicates(list) {
  let duplicates = findDuplicates(list);
  let defList = removeDuplicates(list, duplicates);

  console.log(`La lista que has pasado es: ${list.toString()}.`);
  duplicates.length > 0
    ? console.log(`Los números duplicados son: ${duplicates.toString()}.`)
    : console.log('No hay duplicados');
  defList.length === 0
    ? console.log('No hay números no duplicados')
    : console.log(`Los números no duplicados son: ${defList.toString()}`);
}

function findDuplicates(list) {
  let controlList = [];
  let duplicatesList = [];
  let uniqueList = [];

  list.forEach((num) => {
    if (controlList.includes(num) && !duplicatesList.includes(num))
      duplicatesList.push(num);

    if (!controlList.includes(num)) uniqueList.push(num);

    controlList.push(num);
  });
  return duplicatesList;
}

function removeDuplicates(list, duplicatesList) {
  let defList = [];

  list.forEach((num) => {
    if (!duplicatesList.includes(num)) {
      defList.push(num);
    }
  });
  return defList;
}

init();
