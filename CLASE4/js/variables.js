//////////////////////// LOCAL ///////////////////////////

// function sumar(primerNumero, segundoNumero) {
//   let resultado = primerNumero + segundoNumero;
//   console.log(resultado);
// }
// sumar(10, 40);
// //No se puede acceder a la variable resultado fuera del bloque
// console.log(resultado);


//////////////////////// GLOBAL ///////////////////////////

// let resultado = 0;
// function sumar(primerNumero, segundoNumero) {
//     resultado = primerNumero + segundoNumero;
// }
// sumar(5,6);
// //Se puede acceder a la variable resultado porque es global
// console.log(resultado);


//////////////////////// FUNCIONES ANONIMAS ///////////////////////////

// const mostrar  = function (a, b) {
//   console.log(a + ' ' + b);
// };

// const suma  = function (a, b) {
//   return a + b;
// };

// const resta = function (a, b) {
//   return a - b;
// };



// mostrar(15, 20);
// mostrar(1, 2);
// mostrar(1000);

// console.log(suma(15,20));

// console.log(resta(15,5));


//////////////////////// FUNCIONES FLECHA ///////////////////////////


// const suma = (a, b) => {
//   return a + b;
// };
// // //Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
// const resta = (a, b) =>  a - b ;
// // const resta = (a, b) =>  { return a - b; };

// console.log(suma(15,20));
// console.log(resta(20,5));


//////////////////////// CALCULAR PRECIO ///////////////////////////

// const suma  = (a,b) => a + b;

// const resta = (a, b) => a - b;

// //Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
// const iva   = precio => precio * 0.21;

// let precioProducto  = 100; 
// let precioDescuento = 50;  

// //Calculo el precioProducto + IVA - precioDescueto
// const precioConIva = suma(precioProducto, iva(precioProducto));

// //Calculo el precioConIva - precioDescueto
// let nuevoPrecio = resta(precioConIva, precioDescuento); 

// console.log(nuevoPrecio);