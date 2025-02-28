// Los eventos los programas están mandando sucesos o mensajes constantemente. Estos sucesos pueden ser provocados por el sistema, el usuario y otro evento

// Cuando se provoca una acción que nuestro sistema puede interceptar e interpretar desembocará la acción definida correspondiente para que se resuelva.
// Un ejemplo, definimos la acción de pinchar, clickar con el ratón. Cuando nosotros pinchemos ocurrirá lo que hemos definido dentro de esa acción. Los eventos serian como un conjunto de instrucciones (función) que están esperando a ejecutarse cuando reciba el mensaje correspondiente a esa acción definida
//https://developer.mozilla.org/es/docs/Learn_web_development/Core/Scripting/Events
//https://developer.mozilla.org/es/docs/Web/Events

let botonPulsado = document.querySelector('#pulsar');
console.log(botonPulsado);
function pulsar() {
  console.log('Has pinchado en el boton pulsar');
}
botonPulsado.addEventListener('click', pulsar);
// botonPulsado.addEventListener('click', function () {
//   console.log('Has pinchado en el boton pulsar');
// });
// botonPulsado.addEventListener('click', () =>
//   console.log('Has pinchado en el boton pulsar')
// );

//Si pasamos el parámetro event,e nos mostrará la información del evento ya que la da por defecto pero no la muestra

//Eventos de ratón
//Click
botonPulsado.addEventListener('click', (evento) => {
  console.log(evento);
  console.log(evento.clientX);
});

//DobleClick
const botonDobleClick = document.querySelector('#pulsar2');

botonDobleClick.addEventListener('dblclick', () => {
  console.log('Has dado 2 clicks');
});

// Mouse
let inputTexto = document.querySelector('#cajaTexto');
inputTexto.addEventListener('mouseover', () => {
  console.info('Has pasado por encima del campo de texto');
});
inputTexto.addEventListener('mouseout', () => {
  console.warn('Has salido del campo de texto');
});
inputTexto.addEventListener('mousemove', () => {
  console.error('Dentro del campo de texto');
});

// Teclado
const tecleaTexto = document.querySelector('#tecleaTexto');
tecleaTexto.addEventListener('keydown', (evento) => {
  console.info('Has presionado la tecla: ' + evento.key);
});
tecleaTexto.addEventListener('keyup', (evento) => {
  console.error('Has soltado una tecla: ' + evento.key);
});
tecleaTexto.addEventListener('keypress', (evento) => {
  console.warn('Mantienes pulsada una tecla: ' + evento.key);
});

// Formulario
let miformulario = document.querySelector('#miformulario');

miformulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); //Para que no se recargue la página
  let usuario = document.querySelector('#usuario').value;
  console.log(usuario);

  let email = document.querySelector('#email').value;
  console.log(email);

  let opcion = document.querySelector('#opcion').value;
  console.log(opcion);

  console.error('Tranquilidad, no me guardo los datos');
});

let btnEspia = document.querySelector('#btnEspia');

btnEspia.addEventListener('input', () => {
  console.warn(
    'El usuario ha escrito ...que no se entere:\n ' + btnEspia.value
  );
});

//otra forma de escribirlo
/*
btnEspia.addEventListener("input", function(){
    console.warn("El usuario ha escrito ...que no se entere:\n " +this.value);
});*/

//  change -> cuando cambiamos el select del form
let opcion2 = document.querySelector('#opcion2');
console.log(opcion2);
opcion2.addEventListener('change', () => {
  console.log('Has cambiado el select a: ', opcion2.value);
});

// blur y focus -> hacer foco y salir del foco
let textfocus = document.querySelector('#textfocus');
textfocus.addEventListener('focus', () => {
  console.log('Estas dentro del campo - actúa solo cuando entras');
});
textfocus.addEventListener('blur', () => {
  console.log('Estas fuera del campo - actúa solo cuando sales');
});

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('Una alternativa para cargar el documento cuando este cargado');
  console.info('Esta cargado el DOM de JS');
});

// LOAD toda la ventana y recursos
window.addEventListener('load', () => {
  console.info('Que ha cargado toda la ventana');
  console.error('Todos los recursos - img, videos tb');
});

// RESIZE - redimensión de ventana
window.addEventListener('resize', () => {
  console.log('ventana redimensionada', window.innerWidth, window.innerHeight);
});

// SCROLL
window.addEventListener('scroll', () => {
  console.log('Scroll/Pixel:', window.scrollX, window.scrollY);
});

// PORTAPAPELES - CLIPBOARD
let portapapeles = document.querySelector('#portapapeles');

portapapeles.addEventListener('copy', () => {
  console.log('No copies');
  //navigator.clipboard.writeText("");
});
portapapeles.addEventListener('paste', () => {
  console.log('No pegues');
});
portapapeles.addEventListener('cut', () => {
  console.log('No cortes');
});
portapapeles.addEventListener('contextmenu', () => {
  console.log('Menu contextual');
});
