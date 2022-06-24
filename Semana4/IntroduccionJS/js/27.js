//POO
// Objeto Literal
const producto = {
    nombre: 'Libro',
    precio: 100
}

// Objeto Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto('Libro', 100);
console.log(producto2);

const producto3 = new Producto('Camisa', 200);
console.log(producto3);