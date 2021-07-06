// // /Agregamos un parrafo con jQuery
// $("body").prepend('<p class="titulo">Code House</p>');

// //Modificamos las reglas CSS desde jQuery
// $("p").css("background-color", "yellow");
// $("p").css("width", "50%");

// $(".titulo").css({ 
//   "color": "#ccc", 
//   "font-size": "40px", 
//   "border-left": "5px solid #ccc"
// });


// ANIMATE

//Agregamos un parrafo con jQuery
// $("body").prepend('<p style="background-color: red;" class="titulo">Code House</p>');

// //Animamos sus propiedades CSS con animate
// $(".titulo").animate({ 
//     left:'250px',
//     opacity:'0.5',
//     height:'150px',
//     width:'150px'  
//   }, //1er parámetro propiedades
//   6000,            //2do parámetro duración 
//   function() {        //3er parámetro callback
//     console.log("final de animación");
// });

//Agregamos una estructura con jQuery
// $("body").prepend(`
//   <div>
//     <a>Ir a contacto</a>
//     <p style="border: 1px solid green; height: 800px"></p>
//     <section id="seccionContacto">
//       <h4>¡Somos Coders!</h4>
//     </section>
//   </div>`);

// // Asociamos la animación al click en un elemento <a>
// $('a').click((e) => { 
//   e.preventDefault();
  
//   console.log($("#seccionContacto").offset().top);
//   //Animamos sus propiedades CSS con animate
//   $('html, body').animate({
//       scrollTop: $("#seccionContacto").offset().top  
//   }, 5000);
// });


//Agreguemos un párrafo con jQuery
// $("body").prepend('<p id="p1">Coder House</p>');

//Declaración de métodos encadenados
// $("#p1").css("color", "red").slideUp(2000).slideDown(2000);

// // DELAY
// $("#p1")
//   .css("color", "red")
//   .slideUp(2000)
//   .delay(2000)
//   .slideDown(2000);

// Array de objetos para agregar información al DOM.
const productos = [
  { id: 1,  nombre: "Arroz", precio: 125 },
  {  id: 2,  nombre: "Fideo", precio: 70 },
  {  id: 3,  nombre: "Pan"  , precio: 50},
  {  id: 4,  nombre: "Flan" , precio: 100}
];

// Asociamos el evento click en ready luego del DOM Generado
$(document).ready(function () {
  $(".btnComprar").click(function (e) { 
    //Obtenemos hijos del padre <div> desde el target
    let hijos = $(e.target).parent().children();
    //Primer input, valor de ID oculto
    console.log(hijos[0].value);
    //Animaciòn de respuesta de compra
    $(e.target).parent().slideUp("slow");
  });
});

// Recorremos el array con for..of
for (const producto of productos) {
    //Por cada producto ademas de los datos agregamos un botón 
    $("#app").append(`
      <div>
        <input value="${producto.id}" type="hidden">
        <h4>  Producto: ${producto.nombre}</h4>
        <b> $ ${producto.precio}</b>
        <button class="btnComprar">Comprar</button>
      </div>
    `);
}











