const express = require('express'); 
const http = require('http'); 
const { Server } = require('socket.io');

const app = express(); 
const server = http.createServer(app); 
const io = new Server(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    console.log('Un joueur est connecté :', socket.id);

    socket.on('message', (data) => {
        console.log(`Message reçu de ${socket.id}: ${data}`);
        socket.broadcast.emit('message', data);
    });

    socket.on('disconnect', () => {
        console.log('Un joueur s\'est déconnecté :', socket.id);
    });
});

server.listen(3000, () => {
    console.log('Serveur en cours d\'exécution sur http://localhost:3000');
});
