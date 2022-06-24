// Arreglos o Array
const numeros = [10,20,30,40,50,60];

// numeros[0] = "walther";
// numeros[12] = 56;

// numeros.push(70); //Agrega un elemento al final del arreglo
// numeros.push(80);
 numeros.push(70, 80, 90,100,110,120);

// numeros.unshift(0);
numeros.unshift(-20,-10,0); // Agrega al inicio del arreglo.

// delete numeros[4];
numeros.shift(); //Elimina el primer elemento del arreglo.
numeros.pop(); //Eliminar el último elemento del arreglo.
console.log(numeros);
numeros.splice(4,1); // Eliminar un elemento del arreglo en especifico.


console.log(numeros);

// Spread operator
// numeros.push('Junio');
const numerosConMeses = [...numeros, 'Junio'];
console.log(numerosConMeses);