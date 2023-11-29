const personas = [];

const agregarPersona = () => {
    const obtenerRespuesta = (mensaje) => prompt(mensaje);

    const nombre = obtenerRespuesta('Ingrese el nombre:');
    const cedula = obtenerRespuesta('Ingrese el número de cédula:');
    const fechaNacimiento = obtenerRespuesta('Ingrese la fecha de nacimiento (DD/MM/AAAA):');
    const correo = obtenerRespuesta('Ingrese el correo electrónico:');
    const ciudadResidencia = obtenerRespuesta('Ingrese la ciudad de residencia:');
    const ciudadOrigen = obtenerRespuesta('Ingrese la ciudad de origen:');

    const nuevaPersona = {
        nombre,
        cedula,
        fechaNacimiento,
        correo,
        ciudadResidencia,
        ciudadOrigen,
        cancionesFavoritas: Array.from({ length: 3 }, (_, i) => ({
            artista: obtenerRespuesta(`Ingrese el artista de la canción favorita ${i + 1}:`),
            tituloCancion: obtenerRespuesta(`Ingrese el título de la canción favorita ${i + 1}:`)
        }))
    };

    personas.push(nuevaPersona);
    console.log('Persona agregada con éxito.');
};

const mostrarInformacionPersona = () => {
    const posicion = prompt('Ingrese la posición de la persona para mostrar su información:');
    const persona = personas[posicion - 1];

    if (persona) {
        console.log('Información de la persona:');
        Object.entries(persona).forEach(([clave, valor]) => {
            if (clave === 'cancionesFavoritas') {
                console.log(`${clave}:`);
                valor.forEach((cancion, i) => {
                    console.log(`Canción ${i + 1}: ${cancion.artista} - ${cancion.tituloCancion}`);
                });
            } else {
                console.log(`${clave}: ${valor}`);
            }
        });
    } else {
        console.log('No se encontró la persona en esa posición.');
    }
};


while (true) {
    const opcion = prompt('Seleccione una opción:\n1. Agregar Persona\n2. Mostrar Información de Persona\n0. Salir');

    switch (opcion) {
        case '1':
            agregarPersona();
            break;
        case '2':
            mostrarInformacionPersona();
            break;
        case '0':
            console.log('Saliendo del programa.');
            process.exit();
        default:
            console.log('Opción no válida. Inténtelo nuevamente.');
    }
}
