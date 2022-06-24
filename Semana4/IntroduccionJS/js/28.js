//POO
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de ${this.precio}`;
    }

    obtenerPrecio() {
        console.log(this.precio);
    }
}

const producto1 = new Producto('Pizza', 10);
const producto2 = new Producto('Hamburguesa', 20);

console.log(producto1);
console.log(producto1.formatearProducto());

console.log(producto2);
console.log(producto2.formatearProducto());

class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y un isbn ${this.isbn}`;
    }

    obtenerPrecio(){
        super.obtenerPrecio();
        console.log('Si hay en existencia');
    }
}

const libro = new Libro('El señor de los anillos', 10, '123456789');
console.log(libro);
console.log(libro.formatearProducto());
libro.obtenerPrecio();