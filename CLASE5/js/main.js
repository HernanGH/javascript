//////////// METODOS ////////////

// let cadena = "HOLA CODER";

// let cadena1 = new String('Nuevo string');
// console.log(cadena1);

// //Propiedad de objeto String: Largo de la cadena.
// console.log(cadena.length);
// //Método de objeto String: Pasar a minúscula.
// console.log(cadena.toLowerCase());
// //Método de objeto String: Pasar a mayúscula.
// console.log(cadena.toUpperCase());

//////////// MIS METODOS ////////////

// function Persona(nombre, edad, calle) {
//   this.nombre = nombre;
//   this.edad   = edad;
//   this.calle  = calle;
//   this.hablar = function() {
//     console.log("HOLA SOY " + this.nombre);
//   };
//   this.callar = function () { 
//     console.log(this.nombre + ' va a hacer silencio');
//   };
//   this.dormir = function() {
//     console.log('ZZZZZZZZ');
//   }
// }

// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

// console.log(persona1);
// persona1.hablar();
// persona1.callar();
// persona1.dormir();

// console.log();
// persona2.hablar();
// persona2.callar();

////////// IN - FOR IN //////////

// const persona1 = {
//   nombre: "Homero",
//   edad: 39,
//   calle: "Av. Siempreviva 742"
// };
// //devuelve true porque la clave "nombre" existe en el objeto persona1
// console.log( "nombre" in persona1);

// //devuelve false porque la clave "origen" no existe en el objeto persona1
// console.log( "origen" in persona1);

// //recorremos todas las propiedades del objeto con el ciclo for...in
// for (const propiedad in persona1) {
//   console.log(propiedad);
//   console.log(persona1[propiedad]);
// }

////////// CLASES //////////

// class Persona {
//   constructor(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad   = edad;
//     this.calle  = calle;
//   }
//   hablar() {
//     console.log("HOLA SOY " + this.nombre);
//   }
//   dormir() {
//     console.log("ZZZZZZZZZZZZZ");
//   }
//   callar() {
//     console.log(this.nombre + ' va a hacer silencio');
//   }
// }

// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");

// console.log(persona1);
// persona1.hablar();
// persona1.dormir();
// persona1.callar();

//////////// CLASE PRODUCTO ////////////////

// class Producto {
//   constructor(nombre, precio) {
//       this.nombre  = nombre.toUpperCase();
//       this.precio  = parseFloat(precio);
//       this.vendido = false;
//   }
//   sumaIva() {
//       this.precio = this.precio * 1.21;
//   }
//   vender() {
//       this.vendido = true;
//   }
// }
// const producto1 = new Producto("arroz", "125");
// const producto2 = new Producto("fideo", "50");

// producto1.sumaIva();
// producto2.sumaIva();
// producto1.vender();

// console.log(producto1);
// console.log(producto2);


//////////// CLASE AUTO ////////////////

class Auto {
  constructor(marca, año, puertas, combustible) {
      this.marca = marca;
      this.año = año;
      this.puertas = puertas;
      this.combustible = combustible;
  }
  mostrar() {
    for (const propiedad in this) {
      console.log(propiedad + ": " + this[propiedad]);
    }
  }
  mostrar2() {
    console.log(this.año);
    console.log(this.marca);
    console.log(this.puertas);
    console.log(this.combustible);
  }
}

const auto1 = new Auto('Ford', 2020, 3, 'Nafta');

console.log(auto1);
auto1.mostrar();
auto1.mostrar2();