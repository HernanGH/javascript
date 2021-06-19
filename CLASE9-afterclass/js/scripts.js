//////// Lista de presentes ////////

// Dado un array de de alummnos el sitio web debe:
// 1- Mostrar en pantalla los datos de todos los alumnos
// 2- Agregar un boton Presente por cada alumno
// 3- Este boton Presente debe cambiar un booleano en el alumno determinado
// 4- Agregar un solo boton Guardar por debajo de la seccion de datos de los alumnos que guardara en el localStorage los alumnos presentes
// 5- Mostrar el listado de alumnos presentes desde el localStorage al final del sitio


const alummnos = [
  {
    id: 0,
    nombre: "Juancho",
    apellido: "Perez",
    edad: 20,
    presente: false
  },
  {
    id: 1,
    nombre: "Julietita",
    apellido: "Diiiazz",
    edad: 22,
    presente: false
  },
  {
    id: 2,
    nombre: "Roberto",
    apellido: "Sanchez",
    edad: 24,
    presente: false
  },
  {
    id: 3,
    nombre: "Diegito",
    apellido: "Gonzalez",
    edad: 28,
    presente: false
  },
  {
    id: 4,
    nombre: "Pedrito",
    apellido: "Perezzz",
    edad: 18,
    presente: false
  }
];

// console.log(alummnos);

const container = document.getElementById('container');

for (const alumno of alummnos) {
  const element = document.createElement('div');
  element.innerHTML = `
  <div class="card" style="width: 10rem; text-align: center; margin: auto;">
    <div class="card-body">
      <h5 class="card-title">${alumno.nombre} ${alumno.apellido}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${alumno.edad}</h6>
      <button id="${alumno.id}" type="button" class="btn btn-primary btnPresent">Presente</button>
    </div>
  </div>`;
  container.appendChild(element);
}

const buttons = document.getElementsByClassName('btnPresent');

for (const button of buttons) {
  // opcion 2
  // button.onclick = () => console.log('presente');

  // opcion 1
  button.addEventListener('click', (event) => {
    const buttonClickeado = event.target;
    console.log(buttonClickeado.id);
    const alumnoPresente = alummnos.find((alumnoItem) => alumnoItem.id === parseInt(buttonClickeado.id));

    alumnoPresente.presente = true;

    console.log(alummnos);
  });
}

const btnGuardar = document.getElementById('btnGuardar');

btnGuardar.addEventListener('click', () => {
  // ambas condiciones son iguales
  // const alumnoPresente = alummnos.filter((alumnoItem) => alumnoItem.presente === true);
  const alumnosPresente = alummnos.filter((alumnoItem) => alumnoItem.presente);

  console.log(alumnosPresente);
  // PENDIENTE PISAR ALUMNOS YA PRESENTES
  localStorage.setItem('alumnosPresentes', JSON.stringify(alumnosPresente));

  const containerPresentes = document.getElementById('containerPresentes');

  for (const alumno of alumnosPresente) {
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="card" style="width: 10rem; text-align: center; margin: auto; background-color: grey">
      <div class="card-body">
        <h3 class="card-title">${alumno.nombre} ${alumno.apellido}</h3>
      </div>
    </div>`;
    containerPresentes.appendChild(element);
  }
});
