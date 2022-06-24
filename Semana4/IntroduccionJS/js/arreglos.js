// Arreglos o Array
const numeros = [10,20,30,40,50,,60];
// console.log(numeros);
// console.log(numeros[0]);
// console.table(numeros);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 console.table(meses);
// console.log(meses[3]);

meses.forEach(function(elemento, index){
    console.log(`El ${index} del mes ${elemento}`)
});