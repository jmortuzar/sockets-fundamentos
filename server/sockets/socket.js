const {io} = require('../server');

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'ADMIN',
        mensaje: 'Bienvenido a esta app'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });


    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
    });
});