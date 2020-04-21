const Matches = require('./model');

async function find(filter) {
    
    const conditions = buildFindConditions(filter);
    
    const findQuery = buildFindQuery(conditions);

    return await findQuery.exec();

}

async function create(matches) {
    let insertedMatches = [];

    Matches.create(matches, function(err, results) {
        insertedMatches.push(results);
    });

    return insertedMatches;
}

async function update(matches) {
    let updatedMatches = [];

    matches.forEach( match => {

        const { conditions, set } = buildUpdateParameters(match);

        Matches.updateOne(
            conditions,
            set,
            function(err, results) {
                updatedMatches.push(results);
            }
        );
    });

    return updatedMatches;
}

function buildUpdateParameters(match) {
    
    const conditions = { 
        $and: [
            { home: match.home },
            { away: match.away },
            { round: match.round }
        ]
    };

    const set =  {
        $set: {
            homeScore: match.homeScore,
            awayScore: match.awayScore,
            date: match.date
        }
    };

    return {
        conditions,
        set,
    };
}

const buildFindConditions = (filter) => {

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

const buildFindQuery = (conditions) => {

    const findQuery = Matches
        .find(conditions)
        .sort({
            date: 1
        });

    return findQuery;
}

module.exports = {
    find,
    create,
    update,
}