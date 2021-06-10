
// const producto1 = {
//   id: 2,
//   producto: "Arroz"
// };
// localStorage.setItem("producto1", producto1);

///////////// stringify /////////////

// const producto1 = { id: 2, producto: "Arroz" };
// const enJSON    = JSON.stringify(producto1);

// console.log(producto1);
// console.log(enJSON); // {"id":2,"producto":"Arroz"}
// console.log(typeof producto1); // object
// console.log(typeof enJSON);    // string

// localStorage.setItem("producto1", enJSON);
// // Se guarda {"id":2,"producto":"Arroz"}


///////////// parse /////////////

// const enJSON    = '{"id":2,"producto":"Arroz"}';
// const productoObjetoLiteral = JSON.parse(enJSON);

// console.log(typeof enJSON);     // string
// console.log(typeof productoObjetoLiteral);  // object

// console.log(productoObjetoLiteral); // Arroz
// console.log(productoObjetoLiteral.producto); // Arroz
// console.log(productoObjetoLiteral.id); // 2

// const productoGuardadoEnLS = JSON.parse(localStorage.getItem("producto1"));
// console.log(productoGuardadoEnLS);  // 2  


///////////// GUARDAR ARRAY EN LOCALSTORAGE  /////////////

// const productos = [
//   { id: 1,  producto: "Arroz", precio: 125 },
//   {  id: 2,  producto: "Fideo", precio: 70 },
//   {  id: 3,  producto: "Pan"  , precio: 50},
//   {  id: 4,  producto: "Flan" , precio: 100}
// ];

// const guardarLocal = (clave, valor) => {
//   localStorage.setItem(clave, valor)
// };

// //Almacenar producto por producto
// for (const producto of productos) {
//   guardarLocal(producto.id, JSON.stringify(producto));
// }
// // o almacenar array completo
// guardarLocal("listaProductos", JSON.stringify(productos));

///////////// OBTENER ARRAY DESDE LOCALSTORAGE  /////////////
// class Producto {
//   constructor(obj) {
//       this.id  = obj.id;
//       this.nombre  = obj.producto.toUpperCase();
//       this.precio  = parseFloat(obj.precio);
//   }
//   sumaIva() {
//       this.precio = this.precio * 1.21;
//   }
// }
// //Obtenemos el listado de productos almacenado
// const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
// const productos = [];

// //Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
// for (const objeto of almacenados)
//   productos.push(new Producto(objeto));

// //Ahora tenemos objetos productos y podemos usar sus métodos
// for (const producto of productos)
//   producto.sumaIva();

// console.log(productos);
