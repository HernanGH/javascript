// Crea un algoritmo que solicite al usuario dos palabras ingresados por prompt()
// compare las palabras y muestre por consola si la primera palabra es IGUAL o NO a la segunda palabra

var primerPalabra = prompt('Ingrese la primer palabra');

var segundaPalabra = prompt('Ingrese la segunda palabra');

var a = primerPalabra.toLowerCase();
var b = segundaPalabra.toLowerCase();
console.log(a);
console.log(b);
if (a === b) {
  console.log('ES IGUAL');
} else {
  console.log('NO ES IGUAL');
}

// if ((100 == '100') && (typeof 100 == typeof '100')) {
//   console.log('ES IGUAL');
// } else {
//   console.log('NO ES IGUAL');
// }

// if ((100 === '100')) {
//   console.log('ES IGUAL');
// } else {
//   console.log('NO ES IGUAL');
// }