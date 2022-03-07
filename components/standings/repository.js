const Standings = require('./model');

const find = async (filter) => {
    
    const findQuery = buildFindQuery(filter);

    return await findQuery.exec();

}

const buildFindQuery = (filter) => {

    const competition = filter.competition;
    const round = filter.round;

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