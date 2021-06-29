console.log('run...');
// console.log($);

// Acceso equivalente: document.getElementById("listaPaises");
const listaPaises = $("#listaPaises");
// Acceso equivalente: document.getElementsByClassName("paises")
const paises = $(".paises");
// Acceso equivalente: document.getElementsByTagName("li")
const li = $("li");

// console.log(listaPaises);
// console.log(paises);
// console.log(li);


// console.log('div: ', $("div")); 	//selecciona todos los <div> de la página

// console.log('a: ', $("a"));		//selecciona todos los <a>

// console.log('p, a', $("p, a")); 	//seleccionar todas los los <p>, y los <a>

// //seleccionar todo <li> con clase "lista", y que tengan un hijo con ID "caja"
// console.log('li.lista #caja: ', $("li.lista #caja")); 


// console.log($( "p:last" )); 				//Selecciona el último <p> de la página

// console.log($( "ul li:first-child" )); 		//Selecciona todos los <li> que son primeros hijos

// console.log($( "ul li:last-child" )); 		//Selecciona todos los <li> que son últimos hijos

// console.log($( "li:only-child" )); 		//Selecciona todos los <li> que sean hijos únicos

// console.log($( "ul li:nth-child(3) " )); 

// console.log($( ":submit" ));
// console.log($( ":reset" ));
// console.log($( ":password" ));

/* El siguiente código es la equivalencia de creación en JS Vanilla
*/
// var parrafo = document.createElement("p");
// parrafo.innerHTML = '<h1 style="background-color: red">¡Hola Coder!</h1>';
// document.body.appendChild(parrafo);

// $('body').append('<p><h1 style="background-color: red">¡Hola Coder!</h1></p>');

// let producto   = {
//   id: 1,
//   nombre: "Arroz",
//   precio: 125
// };

//Es posible usar plantillas literales de texto en el parámetro.
// $("#app").append(`<div><h3> ID: ${producto.id}</h3>
//                   <p>  Producto: ${producto.nombre}</p>
//                   <b> $ ${producto.precio}</b></div>`);

// let producto2   = {
//   id: 2,
//   nombre: "Flan",
//   precio: 150
// };
// //Es posible usar plantillas de texto en el parámetro.
// $("#app").prepend(`<div><h3> ID: ${producto2.id}</h3>
//                  <p>  Producto: ${producto2.nombre}</p>
//                  <b> $ ${producto2.precio}</b></div>`);


// const productos = [
//   { id: 1,  nombre: "Arroz", precio: 125 },
//   {  id: 2,  nombre: "Fideo", precio: 70 },
//   {  id: 3,  nombre: "Pan"  , precio: 50},
//   {  id: 4,  nombre: "Flan" , precio: 100}
// ];
// localStorage.setItem('lista', JSON.stringify(productos));

const productos = JSON.parse(localStorage.getItem('lista'));
console.log(productos);

if (productos && productos.length > 0) {
  for (const producto of productos) {
    $("#productos").append(`<div style="border: 1px solid white"><h4> ID: ${producto.id}</h4>
    <p>  Producto: ${producto.nombre}</p>
    <b> $ ${producto.precio}</b></div>`);
  }
} else {
  $("#productos").append(`<p>No tenes productos en tu carrito</p>`);
}
