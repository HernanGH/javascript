// window.addEventListener('DOMContentLoaded', function () {
//   console.log('vanilla Js: El DOM esta listo');
// });

// console.log('Run...');

// $(document).ready(function() {
//   console.log("Jquery: El DOM esta listo");
// });

////////////////////////////////////
//Forma explicita
// $(document).ready(function() {
//   console.log('Forma explicita: El DOM esta listo');
// });

// //Forma corta de ready()
// $(function() {
//   console.log('Forma corta: El DOM esta listo');
// });

// //Forma corta con arrow function
// $(() => {
//   console.log('Forma corta => El DOM esta listo');
// });

/////////////////READY vs LOAD//////////////////
// $(document).ready(() => {
//   console.log('El DOM esta listo');
// });

// window.addEventListener('load', () => {
//   console.log( 'Todos los elementos de la ventana están cargados' );
// });

///////////////////// ON ///////////////////////
//Agregamos un botón al body como primer elemento
// $('body').prepend('<button id="btnjQuery">CLICK</button>');

// //Asociamos el evento click al botón creado
// // $('#btnjQuery').on('click', () => {
// //   console.log("Respuesta a un click");
// // });

// //Asociamos el evento doble click al botón creado
// $('#btnjQuery').on('dblclick', () => {
//   console.log("Respuesta al doble click");
// });


/////////////////////////////////////////////
// Array de objetos para agregar información al DOM.
const productos = [
  { id: 1,  nombre: "Arroz", precio: 125 },
  {  id: 2,  nombre: "Fideo", precio: 70 },
  {  id: 3,  nombre: "Pan"  , precio: 50},
  {  id: 4,  nombre: "Flan" , precio: 100}
];
// Recorremos el array con for..of
for (const producto of productos) {
  //Por cada producto además de los datos agregamos un botón 
  $("#app").append(`<div>
    <h4>  Producto: ${producto.nombre}</h4>
    <b> $ ${producto.precio}</b>
    <button id="btn${producto.id}-LS">Guardar en LocalStorage</button>
    <button id="btn${producto.id}-SS">Guardar en SessionStorage</button>
  </div>`);
  // <button id="btn${producto.id}">Comprar</button>

  // //Asociamos el evento a botón recién creado.
  // $(`#btn${producto.id}`).on('click', () => {
  //   console.log(`Compreaste ${producto.nombre}`);
  // });

  $(`#btn${producto.id}-LS`).on('click', () => {
    localStorage.setItem(`${producto.nombre}`,JSON.stringify(producto));
  });

  $(`#btn${producto.id}-SS`).on('click', () => {
    sessionStorage.setItem(`${producto.nombre}`,JSON.stringify(producto));
  });
}
