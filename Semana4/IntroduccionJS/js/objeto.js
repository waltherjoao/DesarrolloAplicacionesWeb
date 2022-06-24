//"use strict"
let producto = {
    nombre: 'Laptop',
    precio: 1000,
    disponible: true
}
// Object.freeze(producto);
producto.nombre = 'Laptop HP';
Object.seal(producto);
//producto.descripcion = 'Laptop de ultima generacion';
//delete producto.nombre; // elimina el atributo nombre
producto.precio = producto.precio * 1.12; // aumenta el precio del 12%
let producto1 = {
    nombre: 'Laptop',
    precio: 1000,
    disponible: true
}
console.log(producto);