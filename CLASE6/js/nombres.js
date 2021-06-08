//Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = [];
let cantidad = 5;

//Empleo de do...while para cargar nombres en el array por prompt()
do {
   let entrada = prompt("Ingresar nombre");
   listaNombres.push(entrada.toUpperCase());
   console.log(listaNombres.length);
} while(listaNombres.length != cantidad)

//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA", "EMA"]);

//Salida con salto de línea usando join
// alert(nuevaLista.join("[fin_de_linea]\n[inicio_de_linea]"));
alert(nuevaLista.join("\n"));

// console.log(nuevaLista[1]);

// console.log(nuevaLista[5]);

// console.log(nuevaLista[6]);

// console.log(nuevaLista.slice(0, 2)); // PRIMEROS 2 elementos

// console.log(nuevaLista.slice(5, 7)); // ULTIMOS 2 elementos
