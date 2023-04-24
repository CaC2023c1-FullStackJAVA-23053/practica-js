// Ej 7)
function cantDivisores(num) {
    if (num < 0) {
        num = num * (-1); // num = -num;
    }
    let contDivisores = 1;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            contDivisores++;
        }        
    }
    return contDivisores;
}

// Ej 8)
function esPrimo(num) {
    return cantDivisores(num) == 2;
}

// Ej 9
function mostrarNPrimos(n) {
    let cont = 1;
    let x = 2;
    while (cont <= n) {
        if (esPrimo(x)) {
            console.log(x);
            cont++;
        }
        x++;        
    }
}