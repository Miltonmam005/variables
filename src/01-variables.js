// este es un comentario de una linea

/* este es 
un comentario 
de varias lineas */
// -------------- mensajes en consola y en la pagina web----------------
console.log("Hola mundo 🌍😊"); //mensaje a la consola

document.writeln("<p class='parrafoResaltado'>Hola Mi mundo 🌍😊</p>"); //mensaje a la pagina web

document.writeln(
  '<a href="http://127.0.0.1:5500/index.html">Mi página web</a>',
); // se pueden agregar etiquetas html a la pagina web desde js y tambien ppueden trabajar con stylos css, como se muestra en el ejemplo de arriba, se le asigna una clase a la etiqueta p y luego se le da estilo a esa clase desde el archivo css.

//----------- ventana emergente-----------

// alert("bienvenido a mi página web 💻😊"); //mensaje emergente en la pagina web

// como declarar variables en js
// var, let, const
/*
let: se le puede reasignar un valor a una variable declarada con let, pero no se puede redeclarar la variable con el mismo nombre dentro del mismo bloque de codigo.
const:
var:
*/

let anioActual;
// inicializar una variable
anioActual = 2024;

document.writeln("<br>El año actual es: " + anioActual); // se puede concatenar texto con variables para mostrar el valor de la variable en la pagina web

anioActual = 2026 // se puede reasignar un valor a una variable declarada con let

document.writeln('<br> El año Actual es: ' + anioActual); // se muestra el nuevo valor de la variable en la pagina web

const url = "http://127.0.0.1:5500/index.html";

document.writeln('<br> La direccion de mi pagina es: ' + url);   