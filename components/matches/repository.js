const Matches = require('./model');

const findByTeam = async (team) => {
    
    return await Matches
    .find({
        $or: [
            {home: team},
            {away: team}
        ]
    })
    .sort({
        round: 1
    }).exec();

}

const findByRound = async (round) => {
    
    return await Matches
    .find({
        round: round
    })
    .sort({
        date: 1
    }).exec();

}

module.exports = {
    findByTeam,
    findByRound
}