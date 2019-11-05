const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const matchSchema = new Schema({
    competition: String,
    home: String,
    away: String,
    homeScore: Number,
    awayScore: Number,
    date: Date,
    round: String,
    venue: String,
    city: String,
    state: String,
    country: String
});

const Matches = mongoose.model('Matches', matchSchema);

module.exports = Matches;