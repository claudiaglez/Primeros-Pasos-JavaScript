//Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic

document.getElementById('btn01').onclick = function(){
    alert('Hola!');
}

//Cambiar el contenido de un elemento HTML mediante JavaScript

let p02 = document.getElementById('p01');
setTimeout(() => {
    p02.textContent += ' ... y aquí tenemos más';
}, 1000);

//Ocultar y mostrar elementos HTML utilizando JavaScript

document.getElementById('visible').onclick = function(){
    document.getElementById('oculto').style.display = 'block';
}

//Crear un array de 10 nombres

let nombres = ["Athos", "Porthos", "Aramis", "Constance", "Antoine", "Richelieu", "Alexandre", "Marie", "Anne", "Ketty"]

for (var i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
    var parrafo = document.createElement('p');
    parrafo.textContent = nombres[i];
    document.body.appendChild(parrafo);
  }

//Crear un array de 10 números

let numeros =[7, 17, 27, 9, 30, 33, 77, 128, 222, 40]

//Crear una función que pinte en pantalla cuántos números tiene el array de números
function contarNumeros(numeros) {
    return numeros.length;
  }
  let cantidadNumeros = contarNumeros(numeros);
  let parrafoResultado = document.createElement('p');
  parrafoResultado.textContent = 'El array tiene ' + cantidadNumeros + ' número(s).';
  document.body.appendChild(parrafoResultado);

// Crea los nodos necesarios para imprimir un formulario
var formulario = document.createElement('form');
formulario.id = 'miFormulario';

var titulo = document.createElement('h2');
titulo.textContent = 'Formulario';
formulario.appendChild(titulo);

var labelNombre = document.createElement('label');
labelNombre.textContent = 'Nombre:';
formulario.appendChild(labelNombre);

var inputNombre = document.createElement('input');
inputNombre.type = 'text';
inputNombre.id = 'nombre';
inputNombre.name = 'nombre';
inputNombre.required = true;
formulario.appendChild(inputNombre);

formulario.appendChild(document.createElement('br'));

var labelEmail = document.createElement('label');
labelEmail.textContent = 'Correo electrónico:';
formulario.appendChild(labelEmail);

var inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.id = 'email';
inputEmail.name = 'email';
inputEmail.required = true;
formulario.appendChild(inputEmail);

formulario.appendChild(document.createElement('br'));

var botonEnviar = document.createElement('button');
botonEnviar.type = 'button';
botonEnviar.textContent = 'Enviar';
botonEnviar.addEventListener('click', mostrarInformacion);
formulario.appendChild(botonEnviar);

document.body.appendChild(formulario);

function mostrarInformacion() {
   
    alert('Los datos han sido enviados!');
}

// Crea los nodos necesarios para imprimir una tabla

var tituloTabla = document.createElement('h3');
tituloTabla.textContent = 'Tabla de datos';

var tabla = document.createElement('table');

tabla.id = 'myTable';

var filaEncabezado = tabla.createTHead().insertRow(0);

var celdaEncabezado1 = filaEncabezado.insertCell(0);
celdaEncabezado1.innerHTML = '<strong>ID</strong>';

var celdaEncabezado2 = filaEncabezado.insertCell(1);
celdaEncabezado2.innerHTML = '<strong>Name</strong>';

var celdaEncabezado2 = filaEncabezado.insertCell(2);
celdaEncabezado2.innerHTML = '<strong>Status</strong>';

var celdaEncabezado2 = filaEncabezado.insertCell(3);
celdaEncabezado2.innerHTML = '<strong>Species</strong>';

var celdaEncabezado2 = filaEncabezado.insertCell(4);
celdaEncabezado2.innerHTML = '<strong>Type</strong>';

var celdaEncabezado2 = filaEncabezado.insertCell(5);
celdaEncabezado2.innerHTML = '<strong>Gender</strong>';



document.body.appendChild(tituloTabla);
document.body.appendChild(tabla);

//Crea array de objetos 10 objetos con su respectivos key:value. Cada objeto deberá tener las siguientes keys:id, name, status, species, type, gender

var toyStoryArray = [
 { 
  id: '01',
  name: 'Andy',
  status: 'active',
  species: 'human',
  type: 'teenager',
  gender: 'masculin',
},
{ 
  id: '02',
  name: 'Woody',
  status: 'active',
  species: 'toy',
  type: 'sheriff',
  gender: 'masculin',
},
{ 
  id: '03',
  name: 'Buzz Lightyear',
  status: 'active',
  species: 'toy',
  type: 'robot',
  gender: 'masculin',
},
{ 
  id: '04',
  name: 'Jessie',
  status: 'active',
  species: 'toy',
  type: 'cowboy',
  gender: 'femenine',
},
{ 
  id: '05',
  name: 'Perdigón',
  status: 'active',
  species: 'toy',
  type: 'horse',
  gender: 'masculin',
},
{ 
  id: '06',
  name: 'Mr.Potato',
  status: 'active',
  species: 'toy',
  type: 'potato',
  gender: 'masculin',
},
{ 
  id: '07',
  name: 'Rex',
  status: 'active',
  species: 'toy',
  type: 'dino',
  gender: 'masculin',
},
{ 
  id: '08',
  name: 'Marcianos',
  status: 'active',
  species: 'toy',
  type: 'martian',
  gender: 'unknown',
},
{ 
  id: '09',
  name: 'Molly Davis',
  status: 'inactive',
  species: 'human',
  type: 'girl',
  gender: 'femenine',
},
{ 
  id: '10',
  name: 'Bo Peep',
  status: 'active',
  species: 'toy',
  type: 'doll',
  gender: 'femenine',
},
]

//Imprime cada elemento del objeto dentro de la tabla que creaste anteriormente

 // Obtener el cuerpo de la tabla en el DOM
var tbody = tabla.createTBody();

// Iterar sobre el array y agregar cada objeto a la tabla
toyStoryArray.forEach(function(persona) {
  // Crear una nueva fila para los datos de la persona
  var filaDatosNueva = tbody.insertRow();

  // Insertar celdas en la nueva fila utilizando las propiedades del objeto
  for (var propiedad in persona) {
    if (persona.hasOwnProperty(propiedad)) {
      var nuevaCelda = filaDatosNueva.insertCell();
      nuevaCelda.textContent = persona[propiedad];
    }
  }
});

// Añadir la tabla al cuerpo del documento
document.body.appendChild(tabla); 


