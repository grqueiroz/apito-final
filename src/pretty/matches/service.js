const matchesService = require('@components/matches/service');
const teamsService = require('@components/teams/service');
const { MatchLine } = require('@pretty/matches/matchLine');

async function getLatest(filter) {
    filter.isCompleted = true;

    const matches = await matchesService.find(filter);
    const latestMatch = getLastestFromSet(matches);

    const latestMatchWithTeams = await enrichTeams(latestMatch);

    const lineBuilder = new MatchLine([latestMatchWithTeams]);

    return lineBuilder.buildMatchLines()[0] || '';
}

async function enrichTeams(match) {
    const teamsFilter = {
        names: [
            match.home,
            match.away
        ]
    };

    const teams = await teamsService.find(teamsFilter);

    const home = teams.find( team => 
        team.name == match.home
    );
    const away = teams.find( team =>
        team.name == match.away  
    );

    match.homeColors = home.colors
    match.awayColors = away.colors

    return match;
}

function getLastestFromSet(matches) {
    return matches.sort((a, b) => b.date - a.date)[0] || {};
}

module.exports = {
    getLatest,
}