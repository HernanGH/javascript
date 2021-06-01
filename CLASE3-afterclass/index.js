// Repaso 
// Variables
//  var let const 
// Condicionales
// if if else switch 
// Bucles
// for y while

// let palabra = 'hola'

// console.log(palabra.length)

// for(let i = 0; i < palabra.length; i++){
//     console.log(palabra[i])
// }

//'h o l a'
//0 1 2 3 

// cuantas 'a' tiene la frase 'hola como estas?'

// let frase = 'hola como estas ?'

// let contador = 0
// for(var i = 0; i < frase.length; i++){
//     if(frase[i] === 'a'){
//         contador = contador + 1;
//     } else {
//        continue;
//     }
// }
// console.log('contador: ', contador);

// Devuelve "true" si "numero" es primo
// De lo contrario devuelve "falso"
// Pista: un número primo solo es divisible por sí mismo y por 1
// Pista 2: Puedes resolverlo usando un bucle `for`
// Nota: Los números 0 y 1 NO son considerados números primos

// const numero = prompt('Ingrese un numero a evaluar');
const numero = 5;
// 2   => 1 2
// 3   => 1 2 3
// 4   => 1 2 3 4
// 8   => 1 2 3 4 5 6 7 8

let esPrimo = false;

if (numero === 1) {
    esPrimo = true;
}

for (let index = 2; index < numero; index++) {
  if (numero % index === 0) {
      esPrimo = false;
      console.log(false);
  }
}
console.log(esPrimo);