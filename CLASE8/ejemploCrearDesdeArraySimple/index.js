//Obtenemos el nodo donde vamos a agregar los nuevos elementos
// let padre = document.getElementById("personas");

// //Array con la información a agregar
// let personas   = ["HOMERO", "MARGE", "BART", "LISA", "MAGGIE"];

// //Iteramos el array con for...of
// for (const persona of personas) {
//     //Creamos un nodo <li> y agregamos al padre en cada ciclo
//     let li = document.createElement("li");
//     li.innerHTML = persona;
//     padre.appendChild(li);
// }


////////////// OBJECTO LITERAL //////////////

let producto   = { id: 1,  nombre: "Arroz", precio: 125 };
let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <p>  Producto: ${producto.nombre}</p>
                        <b> $ ${producto.precio}</b>`;
//Agregamos el contenedor creado al body
document.body.appendChild(contenedor);