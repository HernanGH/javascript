// Crea un algoritmo que solicite al usuario la nota entre 1 y 10 ingresados por prompt() de un alumno
// evaluar la nota y muestrar por consola si el alumno aprobo o no el examen
// 1 - 3 REPROBADO
// 4 - 6 APROBADO
// 7 - 10 PROMOCIONADO

var nota = prompt("Ingresa tu nota");

if (nota !== '') {
  var notaNumerica = parseInt(nota);
} else {
  console.error('Error: NOTA invalida');
}

if ((notaNumerica > 10) || (notaNumerica <= 0)) {
  // BLOQUE TRUE DEL IF PADRE
  console.error('Error: notaNumerica invalida');
} else {
  // BLOQUE FALSE DEL IF PADRE
  // IF HIJO
  if (notaNumerica >= 7) {
    alert("Promocionado");
  } else if ((notaNumerica <= 6) && (notaNumerica >= 4)) {
    alert("Aprobado");
  } else if (notaNumerica <= 3) {
    alert("Reprobado");
  }
}

