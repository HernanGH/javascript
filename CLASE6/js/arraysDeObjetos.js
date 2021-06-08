// const producto1 = {
//   id: 1,
//   producto: "Arroz"
// };

// const lista = [
//   producto1,
//   { id: 2, producto: "Fideo" }
// ];

// lista.push({
//   id: 3,
//   producto: "Pan"
// });

// console.log(lista);


///////////// FOR ////////////////
// const productos = [
//   { id: 1, producto: "Arroz" },
//   { id: 2,  producto: "Fideo" },
//   { id: 3,  producto: "Pan" }
// ];

// for (const producto of productos) {
//     console.log(producto.id);
//     console.log(producto.producto);
//     console.log(producto);
// }


///////////// TYPEOF ////////////////

// let miFuncion = (a,b) => a + b;
// let forma = " redonda ";
// let tamano = 1;
// let esVerdad = true;

// console.log ( typeof miFuncion ); //imprime function
// console.log ( typeof forma ); //imprime string 
// console.log ( typeof tamano ); //imprime number
// console.log ( typeof esVerdad ); //imprime number

// if (typeof forma === 'string')
//   forma = forma.trim();

// console.log(forma);
// console.log("   forma   ");


///////////// FIND ////////////////
// const numeros    = [1, 2, 3, 4, 5];
// const buscaMayoresaTres = (elemento) => elemento > 3;

// //La función parámetro generalmente es una función flecha sin cuerpo.
// const encontrado = numeros.find(buscaMayoresaTres); //Encuentra 4
// console.log(encontrado);

// const nombres = ["Ana", "Ema", "Juan"];

// const encontrado2 = nombres.find(elemento => elemento === "Ema"); //Encuentra "Ema"
// console.log(encontrado2);

// const encontrado3 = nombres.find(elemento => elemento === "Alan");//undefined
// console.log(encontrado3);

///////////// FILTER ////////////////
// const numeros = [1, 2, 3, 4, 5];
// const elementosMenoresACuatro = numeros.filter(elemento => elemento < 4); //Encuentra [1,2,3]
// console.log(elementosMenoresACuatro);

// const elementosMayoresATres = numeros.filter(elemento => elemento > 3); //Encuentra [4,5]
// console.log(elementosMayoresATres);

// const nombres = ["Ana", "Ema", "Juan", "Elia"];
// //Filtrar nombre que incluyen la letra "n" Encuentra ["Ana","Juan"]
// const palabrasConN = nombres.filter(elemento => elemento.includes("n"));
// console.log(palabrasConN);

///////////// MAP ////////////////

// const numeros  = [1, 2, 3, 4, 5];
// const porDos   = numeros.map(x => x * 2);   // porDos = [2, 4, 6, 8, 10]
// console.log(porDos);

// const masCien  = numeros.map(x => x + 100); // porDos = [102, 104, 106, 108, 110]
// console.log(masCien);

// const nombres = ["Ana", "Ema", "Juan", "Elia"];
// const lengths = nombres.map(nombre => nombre.length);//lengths = [3, 3, 4, 4]
// console.log(lengths);

// const nombresEnMayuscula = nombres.map(nombre => nombre.toUpperCase());//lengths = [3, 3, 4, 4]
// console.log(nombresEnMayuscula);

///////////// EJEMPLO PRODUCTOS ////////////////

// const productos = [
//   { id: 1,  producto: "Arroz", precio: 125 },
//   {  id: 2,  producto: "Fideo", precio: 70 },
//   {  id: 3,  producto: "Pan"  , precio: 50},
//   {  id: 4,  producto: "Flan" , precio: 100}
// ];

// const buscarPan = productos.find(producto => producto.id === 3); 
// console.log(buscarPan);//{id: 3, producto: "Pan", precio: 50}

// const baratos = productos.filter(producto => producto.precio < 100); 
// console.log(baratos);//
// [{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

// const aumentos = productos.map(producto => producto.precio += 30);
// console.log(aumentos);
//[155, 100, 80, 130] y el valor de cada producto cambio.
