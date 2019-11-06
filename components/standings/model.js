const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const standingsSchema = new Schema({
    competitionCode: String,
    position: Number,
    team: String,
    points: Number,
    played: Number,
    wins: Number,
    draws: Number,
    losses: Number,
    goalsFor: Number,
    goalsAgainst: Number,
    form: [Number],
    baseRound: Number
});

const Standings = mongoose.model('Standings', standingsSchema);

module.exports = Standings;