///////////// LOCALSTORAGE /////////////
// localStorage.setItem('bienvenida', '¡Hola Code!');
// localStorage.setItem('esValido', true);
// localStorage.setItem('unNumero', 20);


// let mensaje =  localStorage.getItem('bienvenida');
// let bandera =  localStorage.getItem('esValido');
// let numero  =  localStorage.getItem('unNumero');

// console.log(typeof mensaje, mensaje); //string;
// console.log(typeof bandera, bandera); //string;
// console.log(typeof numero, numero);  //string;


///////////// SESSIONSTORAGE /////////////

// sessionStorage.setItem('seleccionados', [1, 2, 3]);
// sessionStorage.setItem('esValido', false);
// sessionStorage.setItem('email', 'info@email.com');

// let lista   =  sessionStorage.getItem('seleccionados').split(",");
// let bandera = (sessionStorage.getItem('esValido') === 'true');
// let email   =  sessionStorage.getItem('email');

// console.log(typeof lista, lista);   //object ["1","2","3"];
// console.log(typeof bandera, bandera); //boolean;
// console.log(typeof email, email);   //string;

///////////// NO RECOMENDABLE /////////////
//Guarda una clave
// localStorage.numeroPrueba = 5;

// //Leer una clave
// alert( localStorage.numeroPrueba ); // 5

// let clave = 'toString';	 //toString método reservado	
// localStorage[clave] = "6"; //No se guarda este dato

///////////// LOCALSTORAGE - FOR /////////////

// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);
//   console.log("Clave: "+ clave);
//   console.log("Valor: "+ localStorage.getItem(clave));
// }

///////////// LOCALSTORAGE - SESSIONSTORAGE - REMOVE /////////////

// localStorage.setItem('bienvenida', '¡Hola Code!');
// sessionStorage.setItem('esValido', true);

// localStorage.removeItem('bienvenida');
// sessionStorage.removeItem('esValido');
// // alert('borrar todo?');
// localStorage.clear();    //elimina toda la información
// sessionStorage.clear(); //elimina toda la información


///////////// TABLA DE MULTIPLICAR GUARDADA /////////////

// const multiplicar  = (a, b) => a * b;
// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// // Solicitamos un valor al usuario
// let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// // En cada repetición calculamos el número ingresado por el número de repetición (i)
// for (let i = 1; i <= 10; i++) {
//   guardarLocal(i, multiplicar(parseInt(ingresarNumero), i));
// }
