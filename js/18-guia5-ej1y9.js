function promedio(arrayDeNums) {
    /*if (arrayDeNums.length == 0) {
        throw "NO SE PUEDE CONTINUAR... VECTOR VACIO";
    }*/
    //cond ? v_true : v_false
    return ( arrayDeNums.length == 0 ? 
             0 : 
             sumatoria(arrayDeNums) / arrayDeNums.length);
}

function sumatoria(arrayDeNums) {
    let acu = 0;
    for (const num of arrayDeNums) {
        acu += num;
    }
    return acu;
}

function mostrarMayoresQue(arrayDeNums, valorASuperar) {
    for (const num of arrayDeNums) {
        if (num > valorASuperar) {
            console.log(num);
        }
    }
}

function mostrarArraySinRepetidos(elArray) {
    for (let index = 0; index < elArray.length; index++) {
        const elemento = elArray[index];
        if (!esta(elemento, index, elArray)) {
            console.log(elemento);
        }
    }
}

function esta(elemento, posHasta, elArray) {
    let cont = 0;
    while(cont < posHasta && elArray[cont] != elemento) {
        cont++;
    }
    return cont < posHasta;
}

const numeros = [5, 1, 6, 4, 8, 6 , 0 , 4 , 1]; 
//mostrarMayoresQue(numeros, promedio(numeros)); // 5, 6, 8
mostrarArraySinRepetidos(numeros);