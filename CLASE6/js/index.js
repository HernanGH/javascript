/////////// ARRAY ///////////
// Declaraciòn de array vacío
// const listaVacia = [];
// console.log(listaVacia);
// console.log(listaVacia[10]); /// ACCESO AL ELEMENTO 10 (QUE NO EXISTE)
// Declaracion de array con nùmeros
// const arrayB = [10, 20];
// console.log(arrayB);

// // Declaracion de array con strings
// const arrayC = ["C1", "C2", "C3"];
// console.log(arrayC);

// // Declaracion de array con booleanos
// const arrayD = [true, false, true, false];
// console.log(arrayD);

// // Declaracion de array mixto
// const arrayE = [1, false, "C4"];
// console.log(arrayE);

/////////////// ACCESO ///////////////
// const numeros = [1, 2, 3, 4, 5];

// let resultado1  = numeros[0] + numeros[2]; // 1 + 3 = 4;
// console.log(resultado1);

// let resultado2  = numeros[1] + numeros[4]; // 2 + 5 = 7;
// console.log(resultado2);

// let resultado3  = numeros[1] + numeros[1]; // 2 + 2 = 4;
// console.log(resultado3);

/////////////// FOR ARRAY ///////////////

// let test = 0;

// test = test + 1;

// const numeros = [1, 2, 3, 4, 5];
// for (let index = 0; index < 5; index++) {
//     alert(numeros[index]);
//     console.log(numeros[index]);
// }

/////////////// ARRAY METODOS ///////////////
// // - LENGTH
// const palabra = 'alan';
// console.log(palabra.length);

// const miArray = ["marca", 3 ,"palabra"];
// console.log(miArray.length);

// // - TO STRING
// const miArray = ["marca", 3 ,"palabra"];

// console.log(miArray.toString());

// // - PUSH
// const miArray = ["marca", 3, "palabra"];
// miArray.push('otro elemento');
// console.log(miArray.length); //El array ahora tiene 4 posiciones
// console.log(miArray);

// // - JOIN
// const otroArray = ["hola", 22, "mundo"];
// console.log(otroArray.join("*")); //Imprime "hola*22*mundo"
// console.log(otroArray.join(";")); //Imprime "hola*22*mundo"

// // // - CONCAT
// const miArray    = ["ford", 45];
// const otroArray  = ["hola", 22, "mundo"];
// const nuevoArray = miArray.concat(otroArray);
// console.log(nuevoArray);
// console.log(miArray);
// console.log(otroArray);
// // nuevoArray ahora es igual a[ford,45,hola,22,mundo]

// // - SLICE
// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// const masculinos = nombres.slice(1, 3); // Nuevo array desde la posición 1 a 3.
// console.log(masculinos);
// console.log(nombres);
// masculinos contiene ['Pedro','Miguel']


//////////////// 