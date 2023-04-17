const EDAD_MINIMA = 18;
let cantEdades = 5;
let cantEdadesQueCumplen = 0;
let edad;

for (let cont = 1; cont <= cantEdades; cont++) {
    edad = parseInt(prompt(`Ingrese la edad nº ${cont}`));
    if ( (edad % 2 != 0) && (edad >= EDAD_MINIMA) ) { // Es impar mayor que 18
        cantEdadesQueCumplen++;
    }
}

console.log(`La cant de edades impares mayores que ${EDAD_MINIMA} es ${cantEdadesQueCumplen}`);