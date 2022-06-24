//If
const puntaje = 5;

// if(puntaje == 10){
//     console.log("El puntaje es el correcto");
// } else {
//     console.log("El puntaje es incorrecto");
// }

//Switch
// switch(puntaje){
//     case 10:
//         console.log('El número es 10');
//         break;
//     case 9:
//         console.log('El número es 9');
//         break;
//     case 8:
//         console.log('El número es 8');
//         break;
//     case 7:
//         console.log('El número es 7');
//         break;
//     default:
//         console.log('No existe el número')
// }

//for
// for(let variable= 0; variable <= 10; variable++){
//     console.log(variable);
// }

//Obtener # pares en la serie del 0 al 10
// for(let variable= 1; variable <= 10; variable++){
//     if(variable % 2 == 0 ){
//         console.log(variable);
//     }
// }

//while
// let manzana = 0;
// while(manzana <= 10){
//     console.log(manzana);
//     manzana++;
// }

const carrito = [
    {id: 1, producto: 'Libro', precio: 100},
    {id: 2, producto: 'Camisa', precio: 200},
    {id: 3, producto: 'Guitarra', precio: 300},
    {id: 4, producto: 'Pantalon', precio: 400},
    {id: 5, producto: 'Zapatos', precio: 500},
    {id: 6, producto: 'Bicicleta', precio: 600},
    {id: 7, producto: 'Pelota', precio: 700},
    {id: 8, producto: 'Pantalon', precio: 800},
    {id: 9, producto: 'Zapatos', precio: 900}
];


// for(let i = 0; i < carrito.length; i++) {
//     console.log(carrito[i].producto);
// }

//ForEach  para iterar y mostrar los elementos del arreglo
carrito.forEach(almacenesLaGanGa => console.log(almacenesLaGanGa.producto));

//Map para iterar y retornar un nuevo arreglo
const nuevoArreglo = carrito.map(miComisariato => miComisariato.precio);
console.log(nuevoArreglo);
