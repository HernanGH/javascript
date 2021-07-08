//////////////////////////////////////////
//  GET
//////////////////////////////////////////

//Declaramos la url que vamos a usar para el GET
const URLGET = "https://jsonplaceholder.typicode.com/posts"

//Agregamos un botón con jQuery
// $("body").prepend('<button id="btnGet">GET</button>');

//Escuchamos el evento click del botón agregado
$("#btnGet").click(() => { 
  // USANDO AJAX MODO CALLBACK FUNCTION
  // $.get(URLGET, function (respuesta, estado) {
  //   if(estado === "success"){
  //     let misDatos = respuesta;
  //     console.log(respuesta);
  //     for (const dato of misDatos) {
  //       $("body").append(`
  //         <div class="posteo" style="border: 1px solid green; text-align: center">
  //           <h3>${dato.title}</h3>
  //           <p> ${dato.body}</p>
  //         </div>
  //       `);
  //     }  
  //   }
  // });

  // USANDO AJAX MODO PROMESA
  // $.get(URLGET).then((respuesta, estado) => {
  //   console.log(respuesta);
  //   console.log(estado);
  //   for (const dato of respuesta) {
  //     $("body").append(`
  //       <div class="posteo" style="border: 1px solid green; text-align: center">
  //         <h3>${dato.title}</h3>
  //         <p> ${dato.body}</p>
  //       </div>
  //     `);
  //   }  
  // });
  
  // USANDO FETCH
  fetch(URLGET)
    .then((respuesta) => {
      console.log(respuesta);
      return respuesta.json();
    })
    .then((respuesta) => {
      console.log(respuesta);
      for (const dato of respuesta) {
        $("body").append(`
          <div class="posteo" style="border: 1px solid green; text-align: center">
            <h3>${dato.title}</h3>
            <p> ${dato.body}</p>
          </div>
        `);
      }
    });
});

//////////////////////////////////////////
//  POST
//////////////////////////////////////////

//Declaramos la url que vamos a usar para el POST
// const URLGET   = "https://jsonplaceholder.typicode.com/posts"

//Declaramos la información a enviar
const infoPost =  { nombre: "Ana", profesion: "Programadora" };

//Agregamos un botón con jQuery
// $("body").prepend('<button id="btnPost">POST</button>');

//Escuchamos el evento click del botón agregado
$("#btnPost").click(() => { 
  // MODO CALLBACK FUNCTION
  // $.post(URLGET, infoPost , (respuesta, estado) => {
  //   if(estado === "success"){
  //     $("body").prepend(`
  //       <h4>
  //         Guardado:${respuesta.nombre} (${respuesta.id})
  //       </h4>
  //     `);
  //   }
  // });

  // MODO PROMESA
  // $.post(URLGET, infoPost).then((respuesta, estado) => {
  //   console.log(respuesta);
  //   console.log(estado);
  //   if(estado === "success"){
  //     $("body").prepend(`
  //       <h4>
  //         Guardado: ${respuesta.nombre} (${respuesta.id})
  //       </h4>
  //     `);
  //   }
  // });

  // USANDO FETCH
  // const formData = new FormData(); // FormData => https://developer.mozilla.org/es/docs/Web/API/FormData/Using_FormData_Objects
  // formData.append('nombre', 'Ana');
  // formData.append('profesion', 'Programadora');
  
  fetch(URLGET, {
    method: 'post',
    body: new URLSearchParams(formData) // URLSearchParams => https://developer.mozilla.org/es/docs/Web/API/URLSearchParams
  })
    .then((respuesta) => respuesta.json())
    .then((respuesta) => {
      console.log(respuesta);
      $("body").prepend(`
        <h4>
          Guardado: ${respuesta.nombre} (${respuesta.id})
        </h4>
      `);
    });
});

//////////////////////////////////////////
//  GETJSON
//////////////////////////////////////////

//Declaramos la url del archivo JSON local
const URLJSON = "data/productos.json"

//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">JSON</button>');

//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;

      // LIMPIAR
      const hijos = $('.dato');
      console.log(hijos);
      for (const hijo of hijos) {
        hijo.remove();
      }

      // RELLENAR
      for (const dato of misDatos) {
        $("body").prepend(`
          <div class="dato" border: 1px solid green; text-align: center">
              <h3>${dato.nombre}</h3>
              <p> ${dato.precio}</p>
          </div>`)
      }  
    }
    });
});
