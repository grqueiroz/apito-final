const Standings = require('./model');

const find = async (round) => {
    
    const findQuery = buildFindQuery(round);

    return await findQuery.exec();

}

const buildFindQuery = (round) => {
    let conditions = {};

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