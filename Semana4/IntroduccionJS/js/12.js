// "use strict"
// Objects
const productos = {
    nombreProducto: "Laptop",
    precio: 1000,
    disponible: true
}
Object.freeze(productos); // No se puede modificar el objeto ni eliminarlo
// Object.seal(productos); // No se puede eliminar el objeto, pero se puede modificar sus propiedades
productos.nombreProducto = "Mouse";
console.log(productos.nombreProducto);