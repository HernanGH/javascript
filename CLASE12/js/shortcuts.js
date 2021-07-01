// //Agregamos dos botones con jQuery
// $("body").prepend('<button id="btn1">BUTTON 1</button>');

// $("body").prepend('<button id="btn2">BUTTON 2</button>');

// //Asociamos el evento click para btn1
// $("#btn1").click(function(event) {
//   console.log(this); // ELEMENTO QUE DISPARO EL EVENTO
//   console.log(event.target); // ELEMENTO QUE DISPARO EL EVENTO
// });

// //Evento click para btn2 con Arrow function y parámetro e
// $("#btn2").click((evento) => {
//   console.log(evento.target); // ELEMENTO QUE DISPARO EL EVENTO
// });

// //Agregamos inputs con jQuery
// $("body").prepend(`
//   <input type="text" class="inputsClass">
//   <input type="number" class="inputsClass">
//   <select class="inputsClass">
//       <option value="1">ID 1</option>
//       <option value="2">ID 2</option>
//       <option value="3" selected >ID 3</option>
//   </select>
//   <textarea class="inputsClass">
// `);

// //Asociamos el evento change a todos los inputs
// $(".inputsClass").change(function (e) {
//   console.log(e.target.value);
//   console.log(this.value);
//   $("body").append(`<p>${this.value}</p>`);
// });
/*
//Agregamos un formulario con jQuery
$("body").prepend(`
  <form id="myForm">
    <input type="text">
    <input type="number">
    <input type="submit">
  </form>
`);

//Asociamos el evento submit al formulario
$("#myForm").submit((e) => {
    //Prevenimos el comportamiento de submit 
    e.preventDefault();

    console.dir(e.target.children);

    //Obtenemos hijos del formulario
    let hijos = $(e.target).children();

    //Obtenemos hijos del formulario con vanilla js
    let hijosNativos = e.target.children;

    console.log(hijos);
    console.log(hijosNativos);

    //Primer input type="text"
    console.log(hijos[0].value);
    //Primer input type="number"
    console.log(hijos[1].value);

    console.log(hijosNativos[0].value);
    console.log(hijosNativos[1].value);

    for (const hijo of hijosNativos) {
      console.log(hijo.value);
    }
});
*/

