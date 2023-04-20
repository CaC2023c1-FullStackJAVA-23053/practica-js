const EDAD_MAXIMA = 120
let nombre, edad;

let minimo = EDAD_MAXIMA // Un número muy grande...
let nombreMasJoven;

nombre = prompt(`Ingrese nombre`);
while(nombre != "*") {
    edad = parseInt(prompt(`Ingrese edad para ${nombre}`));
    // edad <= 0 || edad > EDAD_MAXIMA
    while ( !(edad > 0 && edad <= EDAD_MAXIMA) ) {
        edad = parseInt(prompt(`Error. Ingrese edad para ${nombre}`));
    }
    if (edad <= minimo) {
        minimo = edad;
        nombreMasJoven = nombre;
    }
    nombre = prompt(`Ingrese otro nombre`);
}
if (nombreMasJoven != undefined) { // if (!nombreMasJoven) {...}
    console.log(`El más joven es ${nombreMasJoven} con ${minimo} años`);
} else {
    console.log("No se ingresó ninguna edad");
}
