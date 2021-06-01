//////////////////////// FUNCIONES ///////////////////////////

// function saludar() {
//   console.log("¡Hola estudiantes!");
// }
// saludar();



/////////////////////////////////////////////////////////////

// function prompt(mensaje) {
//   //// mostrar cu

//   return valoringresado
// }
// var nombreIngresado   = prompt("Ingresar nombre");
// alert("El nombre ingresado es " + nombreIngresado);

// var nombreIngresado   = prompt("Ingresar nombre");
// alert("El nombre ingresado es " + nombreIngresado);

// var nombreIngresado   = prompt("Ingresar nombre");
// alert("El nombre ingresado es " + nombreIngresado);


// function solicitarNombre(){
//   let nombreIngresado   = prompt("Ingresar nombre");
//   alert("El nombre ingresado es " + nombreIngresado);
// }

// solicitarNombre();

// solicitarNombre();

// solicitarNombre();


//////////////////////// PARAMETROS ///////////////////////////
// function conParametros(parametro1, parametro2) {
//   console.log(parametro1 + " " + parametro2);
// }

// conParametros("DOS", "UNO");


//////////////////////// SUMA + MOSTRAR ///////////////////////////
// let resultado = 0;
//Función que suma dos números y asigna a resultado
// function sumar(primerNumero, segundoNumero) {
//   let total = primerNumero + segundoNumero;
//   return total;
// }
// //Función que muestra resultado por consola
// function mostrar(mensaje) {
//   console.log(mensaje);
// }

// //Llamamos primero a sumar y luego a mostrar
// let resultado = sumar(5, 5);            
// // mostrar(sumar(6, 3));
// mostrar(resultado);

//////////////////////// CALCULADORA ///////////////////////////

// function calculadora(primerNumero, segundoNumero, operacion) {
//   switch (operacion) {
//       case "+":
//           return primerNumero + segundoNumero;
//       case "-":
//           return primerNumero - segundoNumero;
//       case "*":
//           return primerNumero * segundoNumero;
//       case "/":
//           return primerNumero / segundoNumero;
//       default:
//           return 0;
//   }
// }

// let resultado = calculadora(10, 5, 1000)
// console.log(resultado);

//////////////////////// CUOTAS ///////////////////////////

const total = parseInt(prompt('Ingrese total'));

const cantidadDeCoutas = parseInt(prompt('Ingrese la cantidad de coutas'));

function calculadoraDeCoutas(total, cantidadDeCoutas) {
  switch (cantidadDeCoutas) {
      case 3:
          return total / 3;
      case 6:
          return total / 6;
      case 9:
          return total / 9;
      case 12:
          return total / 12;
      default:
          return 0;

  }
}

const coutas = calculadoraDeCoutas(total, cantidadDeCoutas);

console.log(coutas);