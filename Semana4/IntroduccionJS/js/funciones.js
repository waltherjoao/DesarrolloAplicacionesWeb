//Declaracion de funciones
function sumar(){
    console.log(2+2);
}

sumar();

//Expresión de la función
let sumar2 = function(){
    console.log(3+3);
}
sumar2();

// IIFE se llama inmediatamente invocada function expression
(function(){
    console.log(5+5);
})();

function sumarParam(numero1=0, numero2=0)
{
    console.log(numero1+numero2);
}

sumarParam(5.2 , 7);
sumarParam(5);
sumarParam();

let total = 200;
function agregarCostos(precio){
    return total += precio;  // total = total + precio;
}

console.log(agregarCostos(5));
