//Array methods


const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

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

// forEach
meses.forEach(mes => {
    if(mes === 'Febrero'){
        console.log(mes);
    }
});

//Includes
console.log(meses.includes('Febrero'));
console.log(carrito.includes('Bicicleta')); //no funciona porque no es un objeto

//Some (retorna true o false) ideal para validar si existe algun elemento en el arreglo
let resultado = carrito.some(function(item){
    return item.producto === 'Pantalon';
});

console.log(resultado);

//Reduce (retorna un solo valor)
let total = carrito.reduce(function(total, item){
    return total + item.precio;
}, 0);

//Usando arrayFunction
total = carrito.reduce((total, item) => total + item.precio, 0);
console.log(total);


//Filter (retorna un arreglo)
let carritoFiltrado = carrito.filter(function(item){
    return item.precio > 400;
});
console.table(carritoFiltrado);