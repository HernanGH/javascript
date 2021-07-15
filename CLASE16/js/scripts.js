const productos = [
  {
    id: 0,
    nombre: 'coca cola',
    precio: 100
  },
  {
    id: 1,
    nombre: 'pepsi',
    precio: 100
  },
  {
    id: 2,
    nombre: 'mirinda',
    precio: 100
  }
];

const handeClick = (evento) => console.log(evento.target); 

const eventButtonClick = (padre, callback) => {
  $(padre).click(callback);
}

const mostrarLista = (productos) => {
  for (const producto of productos) {
    $('body').append(`
      <div style="border: 1px solid grey">
        <p>id: ${producto.id}</p>
        <h4>id: ${producto.nombre}</h3>
        <h6>id: ${producto.precio}</h4>
        <button>Mostrar</button>
      </div>
    `);
  }
}

const mostrarProductos = () => {
  console.log('1')
  // ROMPE CON LA SINCRONIA Y SE QUEDA ESPERANDO LOS PRODUCTOS
  $.getJSON('data/productos.json', (productosJSON) => {
    console.log('2')
    console.log(productosJSON);
    // FUNCION QUE SE EJECUTA CUANDO DESPUES DE OBTENER LOS DATOS
    mostrarLista(productosJSON);
    
    // FUNCION QUE SE EJECUTA CUANDO DESPUES DE OBTENER LOS DATOS
    eventButtonClick('button', handeClick);
  });
  console.log('3');
};

mostrarProductos();

console.log('0');