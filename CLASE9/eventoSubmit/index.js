//CODIGO JS
// const link = document.getElementById('link');

// link.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log('no podes salir de aca');
// });

const miFormulario = document.getElementById("formulario");

const validarFormulario = (event) => {
  event.preventDefault(); // evitar/para el comportamiento por defecto del evento
  
  //////// ELEMENTO DISPARADOR DEL EVENTO ////////
  //Obtenemos el elemento desde el cual se disparó el evento, usan el target
  const formulario = event.target;

  console.log(formulario);
  console.dir(formulario);// informacion completa del elemento

  //Obtengo el valor del primero hijo <input type="text">
  console.log(formulario.children[0].value); 
  //Obtengo el valor del segundo hijo <input type="number"> 
  console.log(formulario.children[1].value);  
  console.log("Formulario Enviado");
};

miFormulario.addEventListener("submit", validarFormulario);

