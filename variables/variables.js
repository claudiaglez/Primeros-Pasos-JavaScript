// Variables
// Número
let number = 2;
let number1 = 7;
let number2 = 3;
// Cadena de texto
let nombre = "Mathieu";
let surname = "Périgord"
// Booleano
let french=true

// Mostrando en consola

console.log(number);
console.log(nombre);
console.log(french);

// Mostrando en pantalla del navegador

document.write(number, "<br>");
document.write(nombre, "<br>");
document.write(french, "<br>");

// Operando con variables integer

console.log(number += number2);
console.log(number *= number1);
console.log(number2 -= number);
console.log(number1 /= number);

// Operando en la pantalla del navegador

document.write(number += number2, "<br>");
document.write(number *= number1, "<br>");
document.write(number2 -= number, "<br>");
document.write(number1 /= number, "<br>");

// Variables tipo texto

let presentacion = "Mi amigo se llama " + nombre + " y su apellido es " + surname;

console.log(presentacion);
document.write(presentacion);


