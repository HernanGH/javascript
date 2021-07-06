////////////////SHOW//////////////

// //Agregemos <h3> con jQuery ocultos con  style="display: none;"
// $("body").prepend('<h3  style="display: none" >¡Hola Coder1!</h3>');
// $("body").prepend('<h3 style="display: none" >¡Hola Coder2!</h3>');

// console.log('tiempo muerto');

// //Mostramos con show() todos los <h3>
// $("h3").show();

////////////////HIDE//////////////

//Agregamos <h3> con jQuery
// $("body").prepend('<h3>¡Hola Coder1!</h3>');
// $("body").prepend('<h3>¡Hola Coder2!</h3>');

// console.log('tiempo muerto');

// //Ocultamos con hide() todos los <h3>
// $("h3").hide(); 

////////////////FADE IN//////////////

//Agreguemos <h3> con jQuery ocultos con  style="display: none;"
// $("body").prepend('<h3  style="display: none" >¡Hola Coder1!</h3>');
// $("body").prepend('<h3  style="display: none" >¡Hola Coder2!</h3>');

// //Mostramos con fadeIn() todos los <h3>
// $("h3").fadeIn();

////////////////FADE OUT//////////////

//Agregemos <h3> con jQuery"
// $("body").prepend('<h3>¡Hola Coder1!</h3>');
// $("body").prepend('<h3>¡Hola Coder2!</h3>');

// //Ocultamos con fadeOut() todos los <h3>
// $("h3").fadeOut();

////////////////FAST-SLOW//////////////

//Agregamos <h3> con jQuery
// $("body").prepend('<h3>¡Hola Coder1!</h3>');
// $("h3").fadeOut('fast');
// $("h3").fadeOut('slow');
// $("h3").fadeOut(100);


////////////////CALLBACK//////////////

//Agregamos <h3> con jQuery
// $("body").prepend('<h3>¡Hola Coder1!</h3>');

// //Ocultamos con fadeOut() todos los <h3>
// console.log('fadeOut...');
// $("h3").fadeOut(5000, function(){
//     // LINEAS DE CODIGO ASYNCRONICO
//     //Cuando termina de ocultarse el elemento lo mostramos nuevamente
//     console.log('fadein...');
//     $("h3").fadeIn(1000);
// }); 

// $("h3").fadeOut(5000).fadeIn(1000);

////////////////slideDown//////////////

//Agregamos un botón y un div con jQuery
// $("body").prepend('<button id="btn1">Mostrar</button>');

// $("body").prepend(`
//     <div id="div1" style="display: none; height: 120px">
//         <h3>¡Hola Coder!</h3>
//         <h4>Sorpresa 2</h4>
//     </div>
// `);

// //Usamos slideDown sobre div1 en respuesta al click del boton btn1
// $("#btn1").click(() => {
//     $("#div1").slideDown("fast");
// });

////////////////slideUp//////////////


//Agregamos un botón y un div con jQuery
// $("body").prepend('<button id="btn1">Ocultar</button>');

// $("body").prepend(`
//     <div id="div1" style="height: 120px">
//         <h3>¡Hola Coder!</h3>
//         <h4>Sorpresa 2</h4>
//     </div>
// `);

// //Usamos slideDown sobre div1 en respuesta al click del boton btn1
// $("#btn1").click(() => {
//     $("#div1").slideUp("slow");
// });

//Agregamos un botón y un div con jQuery
$("body").prepend('<button id="btn1">Mostrar</button>');

$("body").prepend(`<div id="div1" style="height: 120px">
                        <h3>¡Hola Coder!</h3>
                        <h4>Sorpresa</h4>
                    </div>`);
                    
//Usamos toggle sobre div1 en respuesta al click del botòn btn1
$("#btn1").click(() => { 
    $("#div1").toggle("fast");
});


