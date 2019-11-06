const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stadiumSchema = new Schema({
    name: String,           //Castelão
    fullName: String,       //Estádio Governador Plácido Aderaldo Castelo
    capacity: Number,       //63903
    neighbourhood: String,  //Castelão
    city: String,           //Fortaleza
    state: String,          //CE
    country: String         //Brasil
});

const Stadiums = mongoose.model('Stadiums', stadiumSchema);

module.exports = Stadiums; 