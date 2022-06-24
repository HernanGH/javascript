//CODIGO JS
const boton = document.getElementById("btnMain");


// opcion 2
boton.onclick = () => {
  console.log("Click");
};

boton.onmousemove = () => {
  // console.log("Move");
};

// opcion 1 
boton.addEventListener('mousedown', () => {
  // console.log('mouse down...')
});

boton.addEventListener('mouseup', () => {
  // console.log('mouse up...')
});

boton.addEventListener('mouseover', () => {
  console.log('mouse over...')
});

boton.addEventListener('mouseout', () => {
  console.log('mouse out...')
});