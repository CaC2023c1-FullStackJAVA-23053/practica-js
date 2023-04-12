/*
    El usuario introduce su año de nacimiento
    y la computadora le dice cúal es su edad
    (aproximadamente)
*/
// parseInt(...) y parseFloat(...) permiten convertir cadenas a números
let anioDeNacimiento = parseInt(prompt("Ingrese su año de nacimiento"));
let anioActual = new Date().getFullYear(); // Año actual en JS

let edad = anioActual - anioDeNacimiento;

console.log("Su edad es " + edad + " ó " + (edad-1) +  " años"); // JS < 2015
console.log(`Su edad es ${edad} ó ${edad-1} años`); // Templates literales (JS > 2015)