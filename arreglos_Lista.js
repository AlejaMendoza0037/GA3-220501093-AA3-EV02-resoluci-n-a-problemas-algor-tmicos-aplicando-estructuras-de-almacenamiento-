
function validarOrdenAscendente(vector) {
    for (let i = 0; i < vector.length - 1; i++) {
        if (vector[i] > vector[i + 1]) {
            return false;
        }
    }
    return true;
}


function leerVectorOrdenado() {
    while (true) {
        const entrada = prompt('Ingrese 5 números enteros ordenados ascendentemente, separados por espacios:');
        const numeros = entrada.split(' ').map(Number);

        if (numeros.length === 5 && validarOrdenAscendente(numeros)) {
            return numeros;
        } else {
            alert('Los datos ingresados no cumplen con los requisitos. Inténtelo nuevamente.');
        }
    }
}


function mezclarVectores(vector1, vector2) {
    const resultado = [];
    let i = 0;
    let j = 0;

    while (i < vector1.length && j < vector2.length) {
        if (vector1[i] < vector2[j]) {
            resultado.push(vector1[i]);
            i++;
        } else if (vector1[i] > vector2[j]) {
            resultado.push(vector2[j]);
            j++;
        } else {
            resultado.push(vector1[i]);
            i++;
            j++;
        }
    }

    
    while (i < vector1.length) {
        resultado.push(vector1[i]);
        i++;
    }

    while (j < vector2.length) {
        resultado.push(vector2[j]);
        j++;
    }

    return resultado;
}


const vector1 = leerVectorOrdenado();
const vector2 = leerVectorOrdenado();

const resultado = mezclarVectores(vector1, vector2);
console.log('Lista ordenada de la mezcla de los dos vectores:', resultado);
