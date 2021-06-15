let producto = { id: 1,  nombre: "Arroz", precio: 125 };
let concatenado = "ID : " + producto.id +" - Producto: " + producto.nombre + "$ "+producto.precio;
let plantilla   = `ID: ${producto.id} - Producto: ${producto.nombre} $ ${producto.precio}`;

console.log(concatenado);
console.log(plantilla);