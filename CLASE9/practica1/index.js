// PRACTICA 1
// 1- Crear un boton y un input en html.
// 2- Mostrar un log "Evento Click escuchado" cuando hacemos click en el boton
// 3- Mostrar el valor que tiene el input cuando se termine de escribir una palabra en el input
// 4- Agregar otro evento al input para mostrar el valor al mismo tiempo que se esta modificando

const button = document.getElementById('btnPresente');
const input = document.getElementById('nombre');

button.addEventListener('click', () => {
  console.log('Evento Click escuchado', input.value);
  // localStorage.setItem('nombre',input.value);
});

input.addEventListener('change', () => {
  console.log(input.value);
});

input.addEventListener('keyup', () => {
  console.log(input.value);
});
