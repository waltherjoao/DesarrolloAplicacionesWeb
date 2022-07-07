//querySelector
const heading = document.querySelector('.header__texto h2');
console.log(heading);
heading.textContent = "Walther Joao - TecLemas.";

//querySelectorAll
const enlace = document.querySelectorAll('.navegacion a');
console.log(enlace);
enlace[0].textContent = "Inicio";
enlace[0].classList.add('nueva-clase');

//getElementById / getElementsByClassName / getElementsByTagName

// const enlace2 = document.getElementById("cambiarTexto");
// enlace2.textContent = "Cambiar texto";

//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

//Agregar el href
nuevoEnlace.href = "https://www.google.com";

//Agregar el texto
nuevoEnlace.textContent = "Google";

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregar el nuevo enlace al DOM
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

//Eventos
// console.log(1);

// window.addEventListener('load', () => { //Load espera a que el JS y los archivos que dependen del HTML esten cargados.
//     console.log(2);
// });

// window.onload = () => { console.log(3); }//onload espera a que el JS y los archivos que dependen del HTML esten cargados.

// document.addEventListener('DOMContentLoaded', function() { //DOMContentLoaded espera a que el DOM esté cargado es decir espera por el HTML, pero no espera CSS o imagenes.
//     console.log(4);
// });

// console.log(5);

//window.onscroll = () => { console.log("scroleando.....")};//onscroll es un evento que se ejecuta cuando el usuario hace scroll en la página.

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     evento.preventDefault();
//     console.log('Enviando');
// });

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//Eventos de los Inputs y TextArea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

function leerTexto(evento){
    datos[evento.target.id] = evento.target.value;
}

const formulario = document.querySelector(".formulario");
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    const { nombre, email, mensaje} = datos; //Destructuración
    if(nombre === '' && email === '' && mensaje === ''){
        mostrarMensaje('Todos los campos son obligatorios');
        return;
    } 
    mostrarMensaje('Formulario enviado correctamente', 'correcto');
    console.log('Formulario enviado');
});

function mostrarMensaje(mensaje, tipo = 'error'){
    const objetoVisual = document.createElement('P');
    objetoVisual.textContent = mensaje;
    if(tipo === 'error'){
        objetoVisual.classList.add('error');
    } else {
        objetoVisual.classList.add('correcto');
    }
    
    formulario.appendChild(objetoVisual);

    setTimeout(() => {
        formulario.removeChild(objetoVisual);}, 3000);
}