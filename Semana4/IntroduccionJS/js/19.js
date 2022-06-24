//Declaración de funciones
function sumar(numero1 = 0, numero2 = 0){
    console.log(numero1 + numero2);
}

sumar(6, 7);
sumar(3, 17);
sumar(8, 9);
sumar(6);
sumar();

//Expresión de la función
const sumar2 = function(){
    console.log(2 + 2);
}
sumar2();

// IIFE se llama inmediatamente invocada function expression
(function(){
    console.log('Hola');
})();

function sumar3(numero1 = 0, numero2 = 0){
    return numero1 + numero2;
}

console.log(sumar3(6, 7));

let total = 0;
function agregarCarrito(precio){
    return total += precio;
}

total = agregarCarrito(10);
total = agregarCarrito(50);
total = agregarCarrito(90);
console.log(total);

function calcularImpuesto(total){
    return total * 1.12;
}

console.log(` El total a pagar es $${Math.round(calcularImpuesto(total))}`);