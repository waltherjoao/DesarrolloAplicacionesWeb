// Object Literal
const reservacion = {
    nombre: "Joao",
    apellido: "Gaibor",
    total: 5000,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} y su cantidad a pagar es de ${this.total}`);
    }
}
const reservacion2 = {
    nombre: "Karen",
    apellido: "Gaibor",
    total: 5000,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();