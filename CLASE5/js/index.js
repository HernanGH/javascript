//////////////// OBJETO ///////////////////////
// let nombre = "Homero";
// let edad   = 39;
// let calle  = "Av. Siempreviva 742";

// console.log(nombre);
// console.log(edad);
// console.log(calle);

// Los variables anteriores entran relacionados entre sí,
// entonces mejor usamos un objeto literal
// const persona1 = {
//   nombre: "Homero",
//   edad: 39,
//   calle: "Av. Siempreviva 742"
// };

// console.log(persona1);

//////////// PUNTO ////////////

// console.log(persona1.nombre);

// console.log(persona1.edad);

// console.log(persona1.calle);

//////////// CORCHETE ////////////

// persona1['nombre'] = 'Marge';
// console.log(persona1['nombre']);

// persona1['edad'] = 36;
// console.log(persona1['edad']);

// console.log(persona1['calle']);

// console.log(persona1);

//////////// CONSTRUCTORES /////////////

// function Persona(nombre, edad, calle) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.calle  = calle;
// }

// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

// console.log(persona1);

// console.log(persona2);

//////////// CONSTRUCTORES - literal /////////////

// function Persona(literal) {
//   this.nombre = literal.nombre;
//   this.edad   = literal.edad;
//   this.calle  = literal.calle;
// }

// const objeto = {
//   nombre: "Homero",
//   edad: 39,
//   calle: "Av.Siempreviva 742"
// };

// const persona1 = new Persona(objeto);

// console.log(persona1);


//////////// AUTO ///////////
function Auto(marca, año, puertas, combustible){
  this.marca = marca;
  this.año = año;
  this.puertas = puertas;
  this.combustible = combustible;
}

const auto1 = new Auto("Fiat", 1985, 4 , "Nafta/GNC");
const auto2 = new Auto("volkswagen", 1999, 2 , "Nafta");

console.log(auto1);
console.log(auto2);

const auto3 = {
  marca: 'Ford',
  año: 2020,
  puertas: 3,
  combustible: 'Nafta'
};

console.log(auto3);
