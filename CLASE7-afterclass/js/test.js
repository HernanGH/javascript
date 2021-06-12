const cantidad = parseInt(prompt('Ingrese la cantidad de alumnos presentes'));
const alumnos = []
for (let index = 0; index < cantidad; index++) {
  const nombre = prompt('Ingrese nombre');
  const apellido = prompt('Ingrese apellido');
  const edad = parseInt(prompt('Ingrese edad'));

  const alumno = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
  }
  alumnos.push(alumno);
}

const guardamos = prompt('¿Desea guardar el listado de alumnos?');

if (guardamos.toUpperCase() === 'SI') {
  localStorage.setItem('alumnosPresentes', JSON.stringify(alumnos));
}

const alumnosOrdenadosPorEdad = alumnos.sort((alumnoActual, alumnoSiguiente) => {
  if (alumnoActual.edad > alumnoSiguiente.edad) {
    return -1;
  }
  if (alumnoActual.edad < alumnoSiguiente.edad) {
    return 1;
  }
  return 0;
});
console.log(alumnosOrdenadosPorEdad);

const alumnosOrdenadosPorApellido = alumnos.sort((alumnoActual, alumnoSiguiente) => {
  if (alumnoActual.apellido > alumnoSiguiente.apellido) {
    return 1;
  }
  if (alumnoActual.apellido < alumnoSiguiente.apellido) {
    return -1;
  }
  return 0;
});
console.log(alumnosOrdenadosPorApellido);
