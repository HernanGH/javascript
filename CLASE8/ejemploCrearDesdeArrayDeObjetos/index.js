//////////////// CONCATENACION CON ` (PLANTILLAS LITERALES) ////////////////
// let producto = { id: 1,  nombre: "Arroz", precio: 125 };

// let concatenado = "ID : " + producto.id +" - Producto: " + producto.nombre + "$ "+producto.precio;
// let plantilla   = `ID: ${producto.id} - Producto ${producto.nombre} $ ${producto.precio}`;

// //El valor es idéntico pero la construcción de la plantilla es màs sencilla
// console.log(concatenado);
// console.log(plantilla);


//////////////// ` (PLANTILLAS LITERALES) + innerHTML ////////////////

// let producto   = { id: 1,  nombre: "Arroz", precio: 125 };
// let contenedor = document.createElement("div");

// //Definimos el innerHTML del elemento con una plantilla de texto
// contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
//                         <p>  Producto: ${producto.nombre}</p>
//                         <b> $ ${producto.precio}</b>`;

// //Agregamos el contenedor creado al body
// document.body.appendChild(contenedor);


//////////////// ` (PLANTILLAS LITERALES) + innerHTML + ARRAY DE OBJETOS ////////////////

const productos = [
  { id: 1,  nombre: "Arroz", precio: 125 },
  {  id: 2,  nombre: "Fideo", precio: 70 },
  {  id: 3,  nombre: "Pan"  , precio: 50},
  {  id: 4,  nombre: "Flan" , precio: 100}
];

for (const producto of productos) {
  let contenedor = document.createElement("div");
  //Definimos el innerHTML del elemento con una plantilla de texto
  contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                          <p>  Producto: ${producto.nombre}</p>
                          <b> $ ${producto.precio}</b>`;
  document.body.appendChild(contenedor);
}
