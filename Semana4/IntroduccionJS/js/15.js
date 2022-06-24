//Arreglos o Array
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(numeros);
console.table(numeros);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// numeros[11] = 110;
// numeros[2] = 21;

// numeros.push(110);
// numeros.push(120,130,140); //Agrega un elemento al final del arreglo

numeros.unshift(-10,-20,-30); //Agrega al inicio del arreglo

// console.table(numeros);

// meses.pop(); //Elimina el ultimo elemento del arreglo
// meses.shift(); //Elimina el primer elemento del arreglo
// meses.splice(3,2); //Elimina un elemento del arreglo

console.table(meses);

//Rest y Spread operator
const nuevoArreglo = [...meses, 'Julio'];
console.table(nuevoArreglo);



