const elTitulo = document.getElementById("elTitulo");
const textAreaMensaje = document.getElementById("mensaje");
const botonCambiarColor = document.getElementById("botonCambiarColor");
const divCaja = document.getElementById("caja");
const spanAvisoCantCaracteres = document.getElementById("avisoCantCaracteres");
const listaInputs = document.getElementsByTagName("input");

for (const input of listaInputs) {
    input.onmouseover = cambiarColor;
}

function cambiarColor(infoEvento) {
    const quienFue = infoEvento.target;
    quienFue.style.backgroundColor = generarColorRandom();
}

function alertar() {
    alert("Algo pasó!");
}

function numRandom(hastaSinIncluir) {
    return Math.trunc(Math.random() * hastaSinIncluir)
}

function generarColorRandom() {    
    return `rgb(${numRandom(256)},${numRandom(256)},${numRandom(256)})`;
}

elTitulo.onclick = alertar;
// textAreaMensaje.onmouseover = alertar;

botonCambiarColor.onclick = function() {
    divCaja.style.backgroundColor = generarColorRandom();
}



const LIMITE_MENSAJE = 10;
textAreaMensaje.onkeyup = function(infoEvento) {

    console.log(infoEvento.keyCode);
    let cuantosCaracteres = textAreaMensaje.value.length;
    spanAvisoCantCaracteres.innerHTML = `Le quedan ${LIMITE_MENSAJE - cuantosCaracteres} caracteres disponibles`;
}