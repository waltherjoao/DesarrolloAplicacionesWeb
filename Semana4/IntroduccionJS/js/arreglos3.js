const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const productos = [
    {id:1, productos: 'Libro', precio: 100},
    {id:2, productos: 'Camisa', precio: 200},
    {id:3, productos: 'Guitarra', precio: 300},
    {id: 4, productos: 'Pantalon', precio: 400},
    {id: 5, productos: 'Zapatos', precio: 500},
    {id: 6, productos: 'Bicicleta', precio: 600},
    {id: 7, productos: 'Pelota', precio: 700},
    {id: 8, productos: 'Pantalon', precio: 800},
    {id: 9, productos: 'Zapatos', precio: 900}
];

// meses.forEach(function(dato){
//     console.log(dato);
// });

//ArrayFunction
// meses.forEach((dato) => { console.log(dato)});
// meses.forEach(dato => console.log(dato));

// meses.forEach(manzana => {
//     if(manzana == 'Enero'){
//         console.log('Existe el mes');
//     }
// });


// console.log(meses.includes('Enero'));
// console.log(productos.includes('Camisa'));

// productos.forEach(items => {
//     if(items.productos == 'Camisa'){
//         console.log('Si existe el producto');
//     }
// });

//Some (retorna true o false) ideal para validar si existe algun elemento en el arreglo
// let resultado = productos.some(function(malls){
//     return malls.productos == 'Pantaloneta';
// });

// console.log(resultado);

//Obtener la sumatoria de un arreglo
// let sumatoria = 0;
// productos.forEach(costosProducto => {
//     sumatoria = sumatoria + costosProducto.precio;
// });
// console.log(sumatoria);

//Reduce (retorna un solo valor)
// let total = productos.reduce(function(total, objetoProducto){
//     return total + objetoProducto.precio;
// }, 0);

// console.log(total);

//Filter (retorna un arreglo)
let productoFiltrado = productos.filter(function(prodJulio){
    return prodJulio.precio < 600;
});

console.table(productoFiltrado);