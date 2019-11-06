const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const competitionSchema = new Schema({
    code: String,           //CBRA19 (CNE19, CCE19)
    name: String,           //Campeonato Brasileiro Série A 2019
    class: String,          //Campeonato Brasileiro
    aliases: [String],      //Brasileiro, Brasileirão
    level: String,          //Série A
    season: String,         //2019
    region: String,         //Brasil
    scope: String,          //national (regional, international, world)
    knockoutStage: Boolean, //false
});

const Competitions = mongoose.model('Competitions', competitionSchema);

module.exports = Competitions;