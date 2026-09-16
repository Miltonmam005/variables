// Estructura de decision 

/*
condicional simple
if (condicion logica) {
todas las lineas de codigo que quiero ejecutar si se cumple la condicion
}

condicional doble
if(condicion logica ){
todas las lineas de codigo qye quiero ejecutar si se cumple la condicion
}else{
    todas las lineas de codigo que quiero ejecutar su no se cumple la condicion 
}
*/

const edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 18) {
    alert("Usted es mayor de edad");
    document.writeln("<br> Usted es mayor de edad");
} else {
    alert("Usted no es mayor de edad"); //muestra por alert 
    document.writeln("<br> Usted no es mayor de edad"); // muestra por pantalla
}