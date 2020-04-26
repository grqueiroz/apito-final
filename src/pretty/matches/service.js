const matchesService = require('@components/matches/service');
const teamsService = require('@components/teams/service');
const { MatchLine } = require('@pretty/matches/matchLine');

async function getLatest(filter) {
    filter.isCompleted = true;

    const matches = await matchesService.find(filter);

    if (matches.length == 0) {
        return noInfoMessage(filter.teams);
    }

    const latestMatch = getLastestFromSet(matches);
    const latestMatchWithTeams = await enrichTeams(latestMatch);

    const lineBuilder = new MatchLine([latestMatchWithTeams]);

    return lineBuilder.buildMatchLines()[0];
}

async function getSummary(filter) {
    const matches = await matchesService.find(filter);

    if (matches.length == 0) {
        return noInfoMessage(filter.teams);
    }

    const latestMatch = getLastestFromSet(matches);
    const latestMatchWithTeams = await enrichTeams(latestMatch);

    const nextMatch = getNextFromSet(matches);
    const nextMatchWithTeams = await enrichTeams(nextMatch);

    const lineBuilder = new MatchLine(
        [
            latestMatchWithTeams,
            nextMatchWithTeams
        ]
    );

    const matchLines = lineBuilder.buildMatchLines();

    let summary = '';

    matchLines
        .filter( line => line != null)
        .map( line => summary += line);

    return summary;
}

async function enrichTeams(match) {
    if (match) {
        const teamsFilter = {
            names: [
                match.home,
                match.away
            ]
        };

        const teams = await teamsService.find(teamsFilter);

        const home = teams.find( team => 
            team.searchName == match.home
        );
        const away = teams.find( team =>
            team.searchName == match.away  
        );

        match.home = home.name;
        match.homeColors = home.colors;
        match.away = away.name;
        match.awayColors = away.colors;
    }

    return match;
}

function getLastestFromSet(matches) {
    return matches
        .filter(match => match.homeScore != null)
        .sort((a, b) => b.date - a.date)[0];
}

function getNextFromSet(matches) {
    return matches
        .filter(match => match.homeScore == null)
        .sort((a, b) => a.date - b.date)[0];
}

function noInfoMessage(team) {
    return `Sem informações sobre ${team}`;
}

module.exports = {
    getLatest,
    getSummary,
}