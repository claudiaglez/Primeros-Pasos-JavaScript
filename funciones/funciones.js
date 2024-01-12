let nombre;

function llamar_amigo(valorNombre, valorSaludo){
    nombre = valorNombre;
    console.log(valorSaludo, nombre);
    document.write(valorSaludo, nombre+"<br>");
}

llamar_amigo("Mathieu", "Que tal")

let numero01 = 1;
let numero02 = 3;

function sumar_numeros(){
    console.log(numero01 + numero02);
    document.write(numero01 + numero02 +"<br>");
}

sumar_numeros()

//Refactorizamos
function sumar(a,b){
    return a+b;             //Estas variables tienen valor cuando las ejecuto en la función.
}
console.log(sumar(8,9));



let numero = 7;

function numero_par(numero){
    if (numero % 2 == 0){
        console.log(numero + " es par")
        document.write(numero + " es par")
    } else {
        console.log(numero + " es impar")
        document.write(numero + " es impar")
    }
    
}

numero_par(numero)
