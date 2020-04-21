const service = require('@components/matches/service');

const findLatest = async (filter) => {
    filter.isCompleted = true;

    const matches = await service.find(filter);

    return matches.sort((a, b) => b.date - a.date)[0];
}

module.exports = {
    findLatest,
}