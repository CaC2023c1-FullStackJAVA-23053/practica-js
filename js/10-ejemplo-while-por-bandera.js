const EDAD_MINIMA = 18;
let cantEdadesQueCumplen = 0;

let edad = parseInt(prompt(`Ingrese una edad (0 o menos para cortar)`));

while( edad > 0 ) {
    if ( (edad % 2 != 0) && (edad >= EDAD_MINIMA) ) { // Es impar mayor que 18
        cantEdadesQueCumplen++;
    }
    edad = parseInt(prompt(`Ingrese otra edad (0 o menos para cortar)`));
}

console.log(`La cant de edades impares mayores que ${EDAD_MINIMA} es ${cantEdadesQueCumplen}`);