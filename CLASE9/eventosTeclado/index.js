//CODIGO JS
const input1  = document.getElementById("nombre");
const input2  = document.getElementById("edad");

input1.onkeyup = () => {
  console.log("keyUp", input1.value);
};
input2.onkeydown = () => {
  console.log("keyDown", input2.value);
};
