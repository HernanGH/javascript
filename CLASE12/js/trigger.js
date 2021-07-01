/*
//Agregamos un botón y un input
$("body").prepend('<button id="btn1">BUTTON</button>');
$("body").prepend('<input  id="ipt1" type="text">');

//Asociamos el evento change al ipt1
$("#ipt1").change((e) => {
  alert("El valor es " + e.target.value);
});

//Asociamos el evento click para btn1 y usamos trigger
$("#btn1").click(() => {
  //Usamos trigger para disparar el evento change de ipt1 
  $("#ipt1").trigger("change");
});
*/

// Array de objetos para agregar información al DOM.
const productos = [
  { id: 1,  nombre: "Arroz", precio: 125 },
  {  id: 2,  nombre: "Fideo", precio: 70 },
  {  id: 3,  nombre: "Pan"  , precio: 50},
  {  id: 4,  nombre: "Flan" , precio: 100}
];

// Asociamos el evento click en ready luego del DOM Generado
$(document).ready(() => {
  $(".btnComprar").click((e) => { 
    //Obtenemos hijos del padre <div> desde el target
    let hijos = $(e.target).parent().children();
    //Primer input, valor de ID oculto
    console.log(`Compraste el producto con id: ${hijos[0].value}`);
  });
});

// Recorremos el array con for..of
for (const producto of productos) {
  //Por cada producto además de los datos agregamos un botón 
  $("#app").append(`
    <div>
      <input value="${producto.id}" type="hidden">
      <h4>  Producto: ${producto.nombre}</h4>
      <b> $ ${producto.precio}</b>
      <button class="btnComprar">Comprar</button>
    </div>
  `);
}
