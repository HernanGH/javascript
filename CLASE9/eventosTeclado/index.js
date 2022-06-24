//CODIGO JS
const input1  = document.getElementById("nombre");
const input2  = document.getElementById("edad");


// option 2
input1.onkeyup = () => {
  console.log("keyUp en el 1er input", input1.value);
};
input2.onkeydown = () => {
  console.log("keyDown en el 2do input", input2.value);
};
