// Crear un array

let numeros = [1,2,3,4,5,6,7,8,9,10]

function imprimirArray(){

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
    document.write(numeros[i] + "<br>");
  }

}
imprimirArray();

function añadirArray(){
  numeros.push(11);
  console.log(numeros);
  document.write(numeros + "<br>");
}

añadirArray();

// Eliminar números pares Array

let numerosImpares = numeros.filter(numeros => numeros % 2 !== 0);

function verImpares() {
  console.log(numerosImpares);
  document.write(numerosImpares + "<br>");
}

verImpares();

// Número Mayor de un Array

function numeroMayor(){
  console.log(Math.max(...numeros));
  document.write(Math.max(...numeros) + "<br>");
}

numeroMayor();

// Número Menor de un Array 

function numeroMenor(){
  console.log(Math.min(...numeros));
  document.write(Math.min(...numeros) + "<br>");
}

numeroMenor();

// Minúsculas todas las letras de un texto

let saludo = "¡Hola! ¿Cómo estás hoy?";

function functionMinusculas(){
  console.log(saludo.toLowerCase());
  document.write(saludo.toLowerCase() + "<br>");
}

functionMinusculas();

// Mayúsculas todas las letras de un texto

function functionMayusculas(){
  console.log(saludo.toUpperCase());
  document.write(saludo.toUpperCase() + "<br>");
}

functionMayusculas();

// Array de nombres con primera letra en mayúscula

let nombres = ["daniel", "patricia", "isabel", "josé luis"]

function primeraMayuscula(){
  return nombres.map((nombres) => {
    const capitalizedFirst = nombres.charAt(0).toUpperCase();
    const rest = nombres.slice(1).toLowerCase();
    return capitalizedFirst + rest;
  });
}

console.log(primeraMayuscula(nombres));
document.write(primeraMayuscula(nombres));
