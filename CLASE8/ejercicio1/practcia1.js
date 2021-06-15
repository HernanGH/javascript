let titulo = document.getElementById("titulo");

console.log(titulo.innerHTML);


let precios = document.getElementsByClassName("precio");

// const precio1 = precios[0].innerHTML;
// const precio2 = precios[1].innerHTML;
// const precio3 = precios[2].innerHTML;

// console.log(precio1);
// console.log(precio2);
// console.log(precio3);

const precioTotal = parseInt(precios[0].innerHTML) + parseInt(precios[1].innerHTML) + parseInt(precios[2].innerHTML);
console.log('Precio total: ', precioTotal);

let comentarioFinal = document.getElementsByTagName("p");

console.log(comentarioFinal[0].innerHTML);