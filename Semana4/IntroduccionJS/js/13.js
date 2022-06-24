// "use strict"
// Objects
const productos = {
    nombreProducto: "Laptop",
    precio: 1000,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

//RestOperator
const nuevoProductos = {...productos, ...medidas};

console.log(productos);
console.log(nuevoProductos);