const Matches = require('./model');

const findByTeam = (team) => {
    
    const query = Matches
    .find({
        $or: [
            {home: team},
            {away: team}
        ]
    })
    .sort({
        round: 1
    });

    return query;

}

module.exports = {
    findByTeam
}