const Matches = require('./model');

const find = async (filter) => {
    
    const findQuery = buildFindQuery(filter);

    return await findQuery.exec();

}

const buildFindQuery = (filter) => {

    const teams = filter.teams;
    const competition = filter.competition;
    const round = filter.round;
    
    let conditions = {};

    if (teams) {
        conditions.$or = [
            { home: { $in: teams } },
            { away: { $in: teams } }
        ];
    }
    if (competition) {
        conditions.competition = competition;
    }
    if (round) {
        conditions.round = round;
    }
            
    let findQuery = Matches
        .find(conditions)
        .sort({
            date: 1
        });

    return findQuery;
}

module.exports = {
    find
}