//Declaracion de funciones
const reproductor = {
    aplicacion: "Spotify",
    anio: 2022,
    reproducir: function(audio){
        console.log(`Reproduciendo el archivo ${audio}`)
    },
    pausar: function () {
        console.log('Pausando');
    }
}

reproductor.origen = 'desde la web';
reproductor.borrarCancion = function(audio){
    console.log(`Borrando el archivo ${audio}`);
}

reproductor.reproducir('desconocido.mp3');
reproductor.reproducir('pista3.mp3');
reproductor.pausar();