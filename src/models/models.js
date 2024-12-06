const mongoose = require('mongoose');

const partySchema = new mongoose.Schema({
    partyId: String,
    mysteryNumber: Number,
    gameStarted: Boolean,
    players: [{
        playerId: String,
        teamId: String,
        score: Number
    }],
    leaderboard: Map
});

const teamSchema = new mongoose.Schema({
    teamId: String,
    partyId: String,
    members: [String]
});

const playerSchema = new mongoose.Schema({
    playerId: String,
    username: String,
    totalScore: Number
});

const Party = mongoose.model('Party', partySchema);
const Team = mongoose.model('Team', teamSchema);
const Player = mongoose.model('Player', playerSchema);

module.exports = { Party, Team, Player };
