const matchesService = require('@components/matches/service');
const { MatchLine } = require('@pretty/matches/matchLine');

async function getLatest(filter) {
    filter.isCompleted = true;

    const matches = await matchesService.find(filter);
    const latestMatch = getLastestFromSet(matches);

    const lineBuilder = new MatchLine(latestMatch);

    return lineBuilder.buildMatchLines();
}

function getLastestFromSet(matches) {
    return matches.sort((a, b) => b.date - a.date)[0] || {};
}

module.exports = {
    getLatest,
}