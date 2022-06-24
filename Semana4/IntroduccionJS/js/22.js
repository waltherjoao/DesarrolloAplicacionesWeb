const puntaje = 10;

if (puntaje > 9) {
  console.log("Ganaste");
}

switch (puntaje) {
    case 10:
        console.log("Ganaste");
        break;
    default:
        console.log("Perdiste");
}

//for loop
for (let i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log(`El numero ${i} es par`);
    }
}

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

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}

// while loop
let i = 0;
while(i<10) {
    console.log(i);
    i++;
}

//ForEach  para iterar y mostrar los elementos del arreglo
carrito.forEach(element => {
    console.log(element.producto);
});
//Map para iterar y retornar un nuevo arreglo
const nuevoArreglo = carrito.map(element => element.producto);
console.log(nuevoArreglo);