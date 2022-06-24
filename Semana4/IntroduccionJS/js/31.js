const boton = document.querySelector('#boton'); 
boton.addEventListener('click', function() {
    //console.log('diste click');
    Notification.requestPermission() //pide permiso para poder enviar notificaciones
        .then(resultado => console.log(`el resultado es ${resultado} `))
});

if (Notification.permission == 'granted') {
    new Notification('esto es una notificacion', {
        icon: 'favicon.jpeg',
        body: 'desarrollo de aplicaciones web , clases'
    })
}