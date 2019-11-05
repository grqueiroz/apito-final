const Standings = require('./model');

const findByBaseRound = async (round) => {
    
    return await Standings
    .find({
        baseRound: round
    })
    .sort({
        position: 1
    }).exec();

}

module.exports = {
    findByBaseRound
}