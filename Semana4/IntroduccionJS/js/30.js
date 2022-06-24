const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = false;
    if (auth) {
        resolve('Usuario autenticado'); //El promise se cumple
    } else {
        reject('Usuario no autenticado'); //El promise no se cumple
    }
});

//En los promises existen 3 valores
//Pending: el promise no se ha resuelto
//Fulfilled: el promise se cumple
//Rejected: el promise no se cumple

usuarioAutenticado
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(error => {
        console.log(error);
    });