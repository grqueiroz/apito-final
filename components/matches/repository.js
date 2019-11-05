const Matches = require('./model');

const find = async (teams, competition, round) => {
    
    const findQuery = buildFindQuery(teams, competition, round);

    return await findQuery.exec();

}

const buildFindQuery = (teams, competition, round) => {
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