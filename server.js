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

// Stockage des parties en cours
const parties = {};

io.on('connection', (socket) => {
    console.log('Un joueur est connecté :', socket.id);

    // Création d'une nouvelle partie
    socket.on('createParty', () => {
        const partyId = generatePartyId();
        const mysteryNumber = generateMysteryNumber();

        parties[partyId] = {
            players: [socket.id],
            mysteryNumber: mysteryNumber
        };

        socket.join(partyId);
        console.log(`Partie créée : ${partyId} avec le nombre mystère ${mysteryNumber}`);
        socket.emit('partyCreated', { partyId, mysteryNumber });
    });

    // Rejoindre une partie existante
    socket.on('joinParty', (partyId) => {
        if (parties[partyId]) {
            parties[partyId].players.push(socket.id);
            socket.join(partyId);
            console.log(`Joueur ${socket.id} a rejoint la partie ${partyId}`);
            socket.emit('partyJoined', { partyId });
            io.to(partyId).emit('updatePlayers', parties[partyId].players);
        } else {
            socket.emit('error', 'Partie introuvable');
        }
    });

    // Déconnexion du joueur
    socket.on('disconnect', () => {
        console.log('Un joueur s\'est déconnecté :', socket.id);
        for (const partyId in parties) {
            const index = parties[partyId].players.indexOf(socket.id);
            if (index !== -1) {
                parties[partyId].players.splice(index, 1);
                io.to(partyId).emit('updatePlayers', parties[partyId].players);
                if (parties[partyId].players.length === 0) {
                    delete parties[partyId]; // Supprime la partie si vide
                    console.log(`Partie ${partyId} supprimée car vide`);
                }
            }
        }
    });
});

// Génère un ID unique pour chaque partie
function generatePartyId() {
    return Math.random().toString(36).substr(2, 9);
}

// Génère un nombre mystère (6 chiffres)
function generateMysteryNumber() {
    return Math.floor(100000 + Math.random() * 900000);
}


server.listen(3000, () => {
    console.log('Serveur en cours d\'exécution sur http://localhost:3000');
});
