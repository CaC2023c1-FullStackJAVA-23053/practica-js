// POSITIVO O NEGATIVO O NEUTRO
let respuesta;
let num = parseInt(prompt("Ingresá un número"));

// FORMA 1
/*
if (num > 0) {
    respuesta = "positivo";
} else {
    if (num < 0) {
        respuesta = "negativo";
    } else {
        respuesta = "neutro";
    }
}*/

// FORMA 2

if (num > 0) {
    respuesta = "positivo";
} else if (num < 0) {
    respuesta = "negativo";
} else {
    respuesta = "neutro";
}

console.log(`El número ${num} es ${respuesta}`);