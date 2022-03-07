const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: String,       //Fortaleza
    searchName: String, //fortaleza
    fullName: String,   //Fortaleza Esporte Clube
    initials: String,   //FEC
    shortName: String,  //FOR
    aliases: [String],  //Leão, Tricolor de Aço, Leão do Pici
    colors: [String]    //blue, red, white
});

const Teams = mongoose.model('Teams', teamSchema);

module.exports = Teams;