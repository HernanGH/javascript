//////////// LISTADO DE ALUMNOS PRESENTES ////////////

// El sistema de permitir:
//  1 Ingresar la cantidad de alumnos presentes
//  2 Ingresar nombre, apellido y edad de cada uno
//  3 Preguntar si desea guardar los datos
//  4 Mostrar el listado de alumnos presentes ordenados por edad de mayor a menor
//  5 Mostrar el listado de alumnos presentes ordenados alfabeticamente por apellido
 
 
class  persona {
	constructor(nombre,apellido,edad){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
	}
	
}
let ok = true;
const alumnos = [];
cargarAlumno = false;
do{
	let nombre = prompt('Ingrese el nombre del alumno');
	let apellido = prompt('Ingrese el Apellido del alumno');
	let edad = parseInt(prompt('Ingrese la edad del alumno'));
	let alumno = new persona(nombre,apellido,edad);
	ok = confirm('Seguir agregando más alumnos?');
	let cargarAlumno = confirm('Desea guardar el alumnos?');
	if(cargarAlumno){
			alumnos.push(alumno);
			console.log("Alumno cargado");
	}
}while(ok != false)

console.log(alumnos);
ordenarPorApellido(); 
ordenarPorEdad(); 

function ordenarPorApellido() {
	const alumnosOrdenadosApellido = alumnos.sort(function(a,b){
		if(a.apellido > b.apellido)
			return 1;
		if(a.apellido < b.apellido)
			return -1;
		return 0
	});
	console.log(alumnosOrdenadosApellido);
}
function ordenarPorEdad(){
	const listaOrdenadaEdad = alumnos.sort(function(a,b){
		if(a.edad > b.edad)
			return -1;
		if(a.edad < b.edad)
			return 1;
		return 0
	});
	console.log(listaOrdenadaEdad);

}
