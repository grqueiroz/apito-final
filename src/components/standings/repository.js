const Standings = require('./model');

const find = async (competition, round) => {
    
    const findQuery = buildFindQuery(competition, round);

    return await findQuery.exec();

}

const buildFindQuery = (competition, round) => {
    let conditions = {};

    if (competition) {
        conditions.competition = competition;
    }
    if (round) {
        conditions.baseRound = round;
    }
            
    let findQuery = Standings
        .find(conditions)
        .sort({
            position: 1
        });

    return findQuery;
}

module.exports = {
    find
}