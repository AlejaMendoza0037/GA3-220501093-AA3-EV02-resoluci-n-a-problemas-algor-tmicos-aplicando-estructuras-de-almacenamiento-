// validamos que la edad esté en el rango permitido
function validarEdad(edad) {
    return edad >= 1 && edad <= 120;
}

function analizarEdades(edades) {
    let menoresEdad = 0;
    let mayoresEdad = 0;
    let adultosMayores = 0;
    let edadMasBaja = Infinity;
    let edadMasAlta = -Infinity;
    let sumaEdades = 0;

    
    for (let i = 0; i < edades.length; i++) {
        
        while (true) {
            const edadIngresada = prompt(`Ingrese la edad de la persona ${i + 1}:`);
            const edad = parseInt(edadIngresada);

            if (validarEdad(edad)) {
                edades[i] = edad;
                break;
            } else {
                alert('La edad ingresada no es válida. Por favor, ingrese una edad entre 1 y 120 años.');
            }
        }

        if (edades[i] < 18) {
            menoresEdad++;
        } else {
            mayoresEdad++;
            if (edades[i] >= 60) {
                adultosMayores++;
            }
        }

        if (edades[i] < edadMasBaja) {
            edadMasBaja = edades[i];
        }

        if (edades[i] > edadMasAlta) {
            edadMasAlta = edades[i];
        }

        sumaEdades += edades[i];
    }

    const promedioEdades = sumaEdades / edades.length;

    
    console.log(`Personas menores de edad: ${menoresEdad}`);
    console.log(`Personas mayores de edad: ${mayoresEdad}`);
    console.log(`Adultos mayores: ${adultosMayores}`);
    console.log(`Edad más baja: ${edadMasBaja}`);
    console.log(`Edad más alta: ${edadMasAlta}`);
    console.log(`Promedio de edades: ${promedioEdades}`);
}


const edades = new Array(10);


analizarEdades(edades);
