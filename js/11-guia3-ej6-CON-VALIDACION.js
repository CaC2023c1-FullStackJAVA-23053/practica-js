let venta;
let cant = parseInt(prompt(`¿Cuántas ventas vas a ingresar?`));
let acu = 0;

for (let cont = 1; cont <= cant; cont++) {
    venta = parseFloat(prompt(`Ingrese la venta nº ${cont}`));
    while (venta <= 0) {
        venta = parseFloat(prompt(`ERROR. Ingrese la venta nº ${cont}`));
    }
    acu = acu + venta; // acu += venta
    // console.log(`Acu: ${acu}`);
}

console.log(`El total de las ventas es ${acu} y el promedio es ${acu/cant}`);