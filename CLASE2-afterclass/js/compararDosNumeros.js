// Crea un algoritmo que solicite al usuario dos valores numericos ingresados por prompt()
// comparar las numeros y muestrar por consola si el primer numeros es MAYOR MENOR O IGUAL al segundo numero

var primerNumero = parseInt(prompt('Ingrese primero numero'));

var segundoNumero = parseInt(prompt('Ingrese segundo numero'));

if (primerNumero > segundoNumero) {

  console.log('El primer numero es mayor que el segundo');
} else if (primerNumero < segundoNumero) {

  console.log('El primer numero es menor que el segundo');
} else {
  console.log('son iguales');
}