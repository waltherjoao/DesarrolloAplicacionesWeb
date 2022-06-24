//Declaración de funciones
function sumar(){
    console.log(1 + 1);
}

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