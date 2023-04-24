
// Definición
function siguiente (x) {
    return x + 1;
}

function saludar() {
    alert("Hola...");
}

function saludarA(nombre) {
    alert(`Hola ${nombre}`);
}

function anioActual() {
    return new Date().getFullYear();
}

// Invocación
console.log(siguiente(7));
document.write(siguiente(7));