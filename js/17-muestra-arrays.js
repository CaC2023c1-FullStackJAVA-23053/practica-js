// Mostrar elementos del array con for
/*for (let index = 0; index < colores.length; index++) {
    const color = colores[index];
    console.log(color);
}*/

function mostrarArray(elArray) {
    // Mostrar elementos del array con for..of
    for (const elemento of elArray) {
        console.log(elemento);
    }
}

const colores = ["Rojo", "Azul", "Verde", "Rosa", "Negro", "Naranja", "Marron"];

mostrarArray(colores);
console.log("//////////////////////////");
mostrarArray([1,2,3,4]);
mostrarArray([2.3,4.2]);