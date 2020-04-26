const colorsService = require('@pretty/colors/service');

class MatchLine {
    constructor(
        matches
    ) {
        this.matches = matches
    }

    buildMatchLines() {
        return this.matches.map( match => {
            const { homeFlag, awayFlag } = colorsService.getMatchFlags(match);

            const matchLine = 
                buildRound(match) +
                buildHome(homeFlag, match) +
                buildVersus() +
                buildAway(match, awayFlag) +
                buildDate(match) +
                buildStadium(match);
        
            return matchLine;
        });
    }
}

function buildRound(match) {
    return `#${match.round} - `;
}

function buildHome(homeFlag, match) {
    return `${homeFlag} ${match.home} ${match.homeScore || ''} `;
}

function buildVersus() {
    return `x `
}

function buildAway(match, awayFlag) {
    return `${match.awayScore || ''} ${match.away} ${awayFlag} - `
}

function buildDate(match) {
    return `${match.date.toLocaleDateString('pt-BR')} `;
}

function buildStadium(match) {
    return `@ ${match.stadium}\n`;
}

module.exports = {
    MatchLine,
}