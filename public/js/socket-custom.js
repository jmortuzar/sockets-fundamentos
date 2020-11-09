const socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

socket.emit('enviarMensaje', {
    usuario: 'Matias',
    mensaje: 'Hola Mundo!!!'
}, function (mensaje) {
    console.log('Respuesta server: ', mensaje);
});

socket.on('enviarMensaje', function (mensaje) {
    console.log(mensaje);
});