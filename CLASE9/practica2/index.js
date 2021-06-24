// PRACTICA 2
// 1- Crear un formulario para ingresar datos de un alumnos Nombre, Apellido y Edad (crear un Objeto alumno)
// 2- Agregar un boton "Presente" para guardar este booleano en el alumno.
// 3- Luego mostrar por consola y guarda estos datos en el localstorage

class Alumno {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = parseInt(edad),
    this.presente = false
  }
  darPresente() {
    this.presente = true;
  }
  obtenerNombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }
}

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

const listaAlumnos = [];

function validarFormulario(evento) {
  evento.preventDefault();
  
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = parseInt(document.getElementById("edad").value);

  const alumnoPresente = new Alumno(nombre, apellido, edad);
  listaAlumnos.push(alumnoPresente);

  console.log(listaAlumnos);
  const section = document.querySelector(".contenedor");
  const ul = document.createElement("ul");
  const div = document.createElement("div");

  div.innerHTML = `<div class = "container border border-primary text-center"
    <p>Nombre: ${formulario.children[1].value}</p>
    <p>Apellido: ${formulario.children[3].value}</p>
    <p>Edad: ${formulario.children[5].value}</p>
    <p>Fecha de nacimiento: ${2021 - formulario.children[5].value} </p>
    <button id="btnPresente" class="btn btn-primary">Presente</button>  
  </div> <hr>`;

  ul.appendChild(div);
  section.appendChild(ul);

  agregarListener(alumnoPresente);
}

const agregarListener = (alumnoPresente) => {
  const button = document.getElementById('btnPresente');

  button.addEventListener("click", () => {
    alumnoPresente.darPresente();
    console.log(alumnoPresente);

    localStorage.setItem('alumno', JSON.stringify(alumnoPresente));

    console.log(localStorage.getItem('alumno'));

    ///// RETURN DENTRO DE UN METODO
    const nombreCompleto = alumnoPresente.obtenerNombreCompleto();
    console.log(nombreCompleto);

    ///// PARSEO DE STRING A OBJETO LITERAL
    const alumnoGuardado = localStorage.getItem('alumno');
    const objetoAlumno = JSON.parse(alumnoGuardado);

    console.log(objetoAlumno.nombre);
    console.log(objetoAlumno.apellido);
    console.log(objetoAlumno.edad);
    console.log(objetoAlumno.presente);
  });
};