// Async / Promise

async function obtenerEmpleados() {
    const archivo = 'js/empleados.json';

    // fetch(archivo)
    //     // .then(resultado => console.log(resultado))
    //      .then(resultado => { return resultado.json(); })
    //      .then(datos => { console.log(datos.empleados)
    //         const {empleados} = datos;

    //         empleados.forEach(datosEmpleado => {
    //             console.log(datosEmpleado);
    //             console.log(datosEmpleado.id);
    //             console.log(datosEmpleado.nombre);
    //             console.log(datosEmpleado.puesto);
    //             //document.querySelector('.contenido').textContent += datosEmpleado.nombre;
    //         });
    //     })

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();