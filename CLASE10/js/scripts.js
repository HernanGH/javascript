//// variables

// const lugarDeNacimiento = 'Argentina';
// let edad = 20;
// const actividades = ['Futbol' , 'Correr', 'Tocar el piano'];

// console.log(lugarDeNacimiento);
// console.log(edad);
// console.log(actividades);

// actividades.push('Tennis');
// console.log(actividades);

// actividades[0] = 'Fútbol';
// console.log(actividades);
// const elemento = actividades.splice(3, 1);
// console.log(elemento);
// const list = [];
// list.push(elemento);


//// condicionales

// const nombreIngresado = prompt("Ingresar nombre");

// if (
//   (nombreIngresado !== "")
//   && ((nombreIngresado === "EMA") || (nombreIngresado === "ema"))
// ) {
//   alert("Hola Ema"); 
// } else {
//   alert("Error: Ingresar nombre valido");
// }

//// bucles

// let entrada = prompt("Ingresar un dato");

// //Repetimos con While hasta que el usuario ingresa "ESC"
// while(entrada !== "ESC") {
//   alert(`El usuario ingresó ${entrada}`);

//   //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
//   entrada = prompt("Ingresar otro dato");
// }

// const actividades = ['Futbol' , 'Correr', 'Tocar el piano'];
// const actividades = ['Futbol' , 'Futbol', 'Futbol'];

// for (const actividad of actividades) {
//   console.log('for of: ', actividad);
// }

// actividades.forEach((actividad) => {
//   console.log('for each: ', actividad);
// });


//// funciones

// console.log(suma(15,20));
// console.log(resta(20,5));



//// objetos

// function Persona(nombre, edad, calle) {
//   this.nombre = nombre;
//   this.edad   = edad;
//   this.calle  = calle;
//   this.hablar = () => console.log("HOLA SOY "+ this.nombre);
// }

// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

// persona1.hablar();
// persona2.hablar();

//// array

// const numeros  = [1, 2, 3, 4, 5];
// const porDos   = numeros.map(x => x * 2);   // porDos = [2, 4, 6, 8, 10]
// const masCien  = numeros.map(x => x + 100); // porDos = [102, 104, 106, 108, 110]

// const nombres = ["Ana", "Ema", "Juan", "Elia"];
// const lengths = nombres.map(nombre => nombre.length);//lengths = [3, 3, 4, 4]
// const nombresEnMayuscula = nombres.map(nombre => nombre.toUpperCase());//lengths = [3, 3, 4, 4]
// console.log(nombresEnMayuscula);
// console.log(nombres);

//// storage/JSON

// const productos = [
//   { id: 1,  producto: "Arroz", precio: 125 },
//   {  id: 2,  producto: "Fideo", precio: 70 },
//   {  id: 3,  producto: "Pan"  , precio: 50},
//   {  id: 4,  producto: "Flan" , precio: 100}
// ];

// const guardarLocal = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// //Almacenar producto por producto
// for (const producto of productos) {
//   guardarLocal(producto.id, JSON.stringify(producto));
// }
// // o almacenar array completo
// guardarLocal("listaProductos", JSON.stringify(productos));
/*

//// DOM

const descripcion = document.getElementsByTagName('p');
const adjetivo = descripcion[0].getElementsByTagName('strong');

console.log(descripcion[0].innerHTML);
console.log(descripcion[0].innerText);
console.log(adjetivo[0].innerHTML);
console.log(adjetivo[0].innerText);

*/