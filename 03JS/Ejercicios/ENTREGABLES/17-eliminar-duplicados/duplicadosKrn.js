function pedirNumeros() {
  let lista = [];
  let cantidad = parseInt(prompt("Introduce el máximo de números que contendrá la lista"));
  
  for (let i = 0; i < cantidad; i++) {
      let numero = parseInt(prompt(`Introduce el número ${i + 1}:`));
      lista.push(numero);
  }
  return lista;
}

function encontrarDuplicados(lista) {
  let duplicados = [];
  let vistos = [];

  for (let i = 0; i < lista.length; i++) {
      let numero = lista[i];
      
      if (vistos.includes(numero) && !duplicados.includes(numero)) {
          duplicados.push(numero); 
      } else {
          vistos.push(numero); 
      }
  }
  return duplicados;
}

function eliminarDuplicados(lista, duplicados) {
  return lista.filter(numero => !duplicados.includes(numero)); 
}

function ejecutarPrograma() {
  let listaOriginal = pedirNumeros();
  console.log("Lista original: ", listaOriginal);

  let duplicados = encontrarDuplicados(listaOriginal);
  console.log("Números duplicados: ", duplicados);

  let listaSinDuplicados = eliminarDuplicados(listaOriginal, duplicados);
  console.log("Lista sin duplicados: ", listaSinDuplicados);
}

ejecutarPrograma();