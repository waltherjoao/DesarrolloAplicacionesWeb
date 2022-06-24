//Metodos de propiedades
const reproductor = {
    reproducir: function (audio) {
        console.log(`Reproduciendo el archivo ${audio}`);
    },
    pausar: function () {
        console.log('Pausando');
    },
    crearPlayList: function (nombre) {
        return {
            nombre: nombre
            };
    },
    reproducirPlayList: function (playList) {
        console.log(`Reproduciendo la playlist ${playList.nombre}`);
    }
}

reproductor.borrarCancion = function (audio) {
    console.log(`Borrando el archivo ${audio}`);
};

reproductor.reproducir('audio.mp3');
reproductor.pausar();
reproductor.borrarCancion('audio.mp3');
reproductor.crearPlayList('Playlist 1');
console.log(reproductor.crearPlayList('Playlist 1').nombre);
reproductor.reproducirPlayList(reproductor.crearPlayList('Playlist 1'));