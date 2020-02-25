const Matches = require('./model');

const find = async (filter) => {
    
    const conditions = buildConditions(filter);
    
    const findQuery = buildFindQuery(conditions);

    return await findQuery.exec();

}

const buildFindQuery = (conditions) => {

    const findQuery = Matches
        .find(conditions)
        .sort({
            date: 1
        });

    return findQuery;
}

const buildConditions = (filter) => {

    const teams = filter.teams;
    const competition = filter.competition;
    const round = filter.round;
    const startingDate = filter.startingDate;
    
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

    if (startingDate) {
        conditions.date = { $gt: startingDate }
    }

    return conditions;

}

module.exports = {
    find
}