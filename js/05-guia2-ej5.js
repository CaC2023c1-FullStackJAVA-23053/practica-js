const MIN_EDAD = 1;
const MAX_EDAD = 120;

let edad = parseInt(prompt(`Ingresá tu edad (entre ${MIN_EDAD} y ${MAX_EDAD} años)`));

if (edad >= MIN_EDAD && edad <= MAX_EDAD) {
    let genero = prompt("Ingresá tu género [M ó F]");

    if (genero === "M" || genero === "F" || genero === "m" || genero === "f") {
        if (edad >= 65 || (genero === "F" && edad >= 60)) {
            console.log("Puede jubilarse");
        } else {
            console.log("No puede jubilarse");
        }
    } else {
        console.log("Género inválido");
    }
} else {
    console.log("Edad inválida");
}

