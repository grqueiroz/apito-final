const Teams = require('./model');

async function find(filter) {

    const conditions = buildFindConditions(filter);

    const findQuery = buildFindQuery(conditions);
    
    return await findQuery.exec();
}

function buildFindConditions(filter) {

    const names = filter.names;

    let conditions = {};

    if (names) {
        conditions.searchName = { $in: names };
    }

    return conditions;
}

function buildFindQuery(conditions) {

    const findQuery = Teams
        .find(conditions);

    return findQuery;
}

module.exports = {
    find,
}