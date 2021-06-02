// cálculo de IVA 
// 1) Ingresar precio de costo
// 2) Sumar IVA
// 3) Mostrar precio calculado.


// function iva(precio) {
//   const IVA = 0.21;
//   return (precio * IVA) + precio;
// }

// const iva = precio => {
//   const IVA = 0.21;
//   return (precio * IVA) + precio;
// };

// const precioCosto = parseInt(prompt('Ingrese precio'));

// const precioCalculado = iva(precioCosto);

// alert('El precio calculado es: ' + precioCalculado);

// determinar si un número es múltiplo de 2 3 y 5
// 1) Ingresar números a verificar
// 2) ¿Es múltiplo?
// 3) Mostrar resultado.

const esMultiplo = (numero) => {
  if ((numero % 2 === 0) || (numero % 3 === 0) || (numero % 5 === 0)) {
    return true;
  } else {
    return false;
  }
}

const numero = parseInt(prompt('Ingrese numero a evaluar'));

if (esMultiplo(numero)) {
  alert(`Tu numero ingresado: ${numero} es multiplo`);
} else {
  alert(`Tu numero ingresado: ${numero} NO es multiplo`);
}
