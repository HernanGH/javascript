//CODIGO JS
const input1  = document.getElementById("nombre");
const input2  = document.getElementById("edad");
const button  = document.getElementById("button");

input1.onchange = () => {
  console.log("valor1: ", input1.value);
};

input2.onchange = () => {
  console.log("valor2: ", input2.value)
};

button.onclick = () => {
  console.log("valor1: ", input1.value);
  console.log("valor2: ", input2.value)
}