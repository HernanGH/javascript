////////////////// CREAR //////////////////

// Crear nodo de tipo Elemento, etiqueta p
// let parrafo = document.createElement("p");

// Insertar HTML interno
// parrafo.innerHTML = "¡Hola Coder, Chau Coder!"; 

// Añadir el nodo Element como hijo de body
// document.body.appendChild(parrafo);

////////////////// BORRAR //////////////////

// let parrafo      = document.getElementById("parrafo1");
// //Elminando el propio elemento, referenciando al padre
// parrafo.parentNode.removeChild(parrafo);
// console.log('Elemento eliminado');
let paises       = document.getElementsByClassName("paises");
//Eliminando el primer elemento de clase paises
paises[0].parentNode.removeChild(paises[0])