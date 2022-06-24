//CODIGO JS
const input1  = document.getElementById("nombre");
const input2  = document.getElementById("edad");
const button  = document.getElementById("button");

// opcion 2
input1.onchange = () => {
  console.log("onchange valor1: ", input1.value);
};

// opcion 1
input2.addEventListener('change', () => {
  console.log("change valor2: ", input2.value)
});

button.onclick = () => {
  console.log('onclick de guarda...')
  console.log("valor1: ", input1.value);
  console.log("valor2: ", input2.value)
}