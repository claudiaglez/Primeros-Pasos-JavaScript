let carro = {
    marca: "Peugeot",
    año: 2015,
    modelo: 205,
    puertas: 5,
    modelo: [{
        nombre: "Megane",
        año: 2019,
        puertas: 3,
    },{
        nombre: "Cupra",
        año: 2017,
        puertas: 3,
    }

    ],
}

function marcaCarro() {
    console.log(carro.marca);
    document.write(carro.marca + "<br>");
}

marcaCarro();

function puertasCarro() {
    console.log(carro.puertas);
    document.write(carro.puertas + "<br>");
}

puertasCarro()

function nombreModelo() {
    console.log(carro.modelo[0].nombre)
    document.write(carro.modelo[0].nombre)
}

nombreModelo()