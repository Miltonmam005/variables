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

anioActual = 2026; // se puede reasignar un valor a una variable declarada con let

document.writeln("<br> El año Actual es: " + anioActual); // se muestra el nuevo valor de la variable en la pagina web

const url = "http://127.0.0.1:5500/index.html";

document.writeln("<br> La direccion de mi pagina es: " + url);

// Ejercicio de suma de dos numeros

let num1, num2, resultado;
num1 = 10;
num2 = 25;
resultado = num1 + num2;

document.writeln("<br> El resultado de la suma es: " + resultado);

console.log("El resultado de la suma es: " + resultado);

// Ejercicio de resta de dos numeros con const

const numero1 = parseInt(prompt("ingrese un  numero")),
 numero2 = parseInt(prompt("ingrese un segundo numero"));

document.writeln("<br> El resultado de la suma es: " + (numero1 + numero2)); // forma mas facil de hacer el ejercicio, es para hacer menos codigos

// tipos de datos primitivos
// strings
const Nombre = 'Milton Mamani'
const Producto = "Sapatillas"
const Tareas = `Realizar el TP-1 de JS`

// numbers
const Edad = 30
const Precio = 150.50 
const Negativo = -20

// booleanos
const Encendido = true
const Apagado = false

// null: es un valor vacio
let valorNulo = null
// undefined : es un valor que no ha sido asignado a una variable, es decir, una variable que ha sido declarada pero no inicializada, o una variable que ha sido eliminada con el operador delete.

let valorIndefinido;


console.log(Nombre);
console.log(Producto);
console.log(Tareas);
console.log(Edad);
console.log(Precio);
console.log(Negativo);
console.log(Encendido);
console.log(Apagado);
console.log(valorNulo);
console.log(valorIndefinido);

//  tipos de datos referenciales

// objetos con notacion literal      es una caja que guarda datos
const persona = {
    nombre: 'Milton',
    apellido: 'Mamani',
    edad: 28,
    profesion: 'Desarrollador Web'
}
console.log(persona); 

// arrays    es una lista de datos ordenada, se pueden guardar cualquier tipo de dato, incluso otros arrays u objetos
const Productos = ['Sapatillas', 'Camisa', 'Pantalon', 'Gorra']
console.log(Productos); 