const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const standingsSchema = new Schema({
    competition: String,
    position: Number,
    team: String,
    points: Number,
    played: Number,
    wins: Number,
    draws: Number,
    losses: Number,
    goalsFor: Number,
    goalsAgainst: Number,
    form: [
        Number,
        Number,
        Number,
        Number,
        Number        
    ],
    baseRound: Number
});

const Standings = mongoose.model('Standings', standingsSchema);

module.exports = Standings;