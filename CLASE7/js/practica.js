// // Pedir dato

// const nombre = prompt('Ingrese nombre');
// const apellido = prompt('Ingrese apellido');
// const fechaActual = prompt('Ingrese la fecha actual');

// //Storage

// localStorage.setItem('nombre', nombre);
// localStorage.setItem('apellido', apellido);
// sessionStorage.setItem('fecha', fechaActual);


// //mostrar en consola
// console.log(localStorage.getItem('nombre'));
// console.log(localStorage.getItem('apellido'));
// console.log(sessionStorage.getItem('fecha'));

///////// EJ 2 /////////

class Persona {
    constructor(obj) {
        this.nombre  = obj.nombre;
        this.apellido  = obj.apellido;
    }
  }

  const nombre = prompt('Ingrese nombre');
  const apellido = prompt('Ingrese apellido');
  const gustos = [];

  for (let index = 0; index < 3; index++) {
    const gusto = prompt('Ingrese gusto de helado');
    gustos.push(gusto);
  }
  const persona = new Persona({ nombre: nombre, apellido: apellido});

  localStorage.setItem("persona", JSON.stringify(persona));

  sessionStorage.setItem("gustos", JSON.stringify(gustos));
  
  const personaGuardada = JSON.parse(localStorage.getItem('persona'));
  console.log(personaGuardada);
  
  const gustosGuardados = JSON.parse(sessionStorage.getItem('gustos'));

  for (const gusto of gustosGuardados)
    console.log(gusto);
    
  