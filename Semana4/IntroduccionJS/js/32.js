// Async / await

function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout(()=> {
            resolve('Los Clientes fueron descargados');
        }, 5000);
    });
}

function descargarUltimosPedidos(){
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout(()=> {
            resolve('Los Pedidos fueron descargados');
        }, 3000);
    });
}

// async function app(){
//     try{
//         const resultado = await descargarNuevosClientes();
//         //console.log('Este código si se bloquea');  //esperando la respuesta en segundo plano.
//         console.log(resultado);
//     } catch(error) {
//         console.log(error);
//     }
// }

async function app(){
    try{
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos() ]);
        console.log(resultado);
        console.log(resultado[0]);
        console.log(resultado[1]);

    } catch(error) {
        console.log(error);
    }
}

app();

console.log('Este código no se bloquea');