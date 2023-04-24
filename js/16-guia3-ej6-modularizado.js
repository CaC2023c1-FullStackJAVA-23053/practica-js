function leerEnteroPositivo(mensaje) {
    let num = parseInt(prompt(mensaje));
    while (num <= 0) {
        num = parseFloat(prompt(`ERROR. ${mensaje}`));
    }
    return num;
}

let venta;
let cant = leerEnteroPositivo(`¿Cuántas ventas vas a ingresar?`);
let acu = 0;

for (let cont = 1; cont <= cant; cont++) {
    venta = leerEnteroPositivo(`Ingrese la venta nº ${cont}`);
    acu = acu + venta; // acu += venta
    // console.log(`Acu: ${acu}`);
}

console.log(`El total de las ventas es ${acu} y el promedio es ${acu/cant}`);