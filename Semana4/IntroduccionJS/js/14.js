//Arreglos o Array
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(numeros);
console.table(numeros);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.table(meses);

// const arreglo = ["Hola",10, true, "si", null, {nombre: "Juan", edad: 20}, [1,2,3,4,5]];
// console.table(arreglo);

console.log(numeros[4]);

//Conocer el tamaño del arreglo
console.log(numeros.length);

numeros.forEach(function(elemento, index){
    console.log(`${index} - ${elemento}`);
});