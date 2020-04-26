const colorsService = require('@pretty/colors/service');

const EMPTY = '';

class MatchLine {
    constructor(
        matches
    ) {
        this.matches = matches
    }

    buildMatchLines() {
        const matchLines = this.matches.map( match => {
            if (!match) {
                return;
            }

            const { homeFlag, awayFlag } = colorsService.getHomeAndAwayFlags(match);

            const matchLine = 
                buildRound(match) +
                buildHome(match, homeFlag) +
                buildVersus() +
                buildAway(match, awayFlag) +
                buildDate(match) +
                buildStadium(match);
        
            return matchLine;
        });

        return matchLines;
    }
}

function buildRound(match) {
    return `#${match.round} - `;
}

function buildHome(match, homeFlag = '') {
    return `${homeFlag} ${match.home} ${buildScore(match.homeScore)} `;
}

function buildVersus() {
    return `x `
}

function buildAway(match, awayFlag = '') {
    return `${buildScore(match.awayScore)} ${match.away} ${awayFlag} - `
}

function buildDate(match) {
    return `${match.date.toLocaleString('pt-BR')} `;
}

function buildStadium(match) {
    return `@ ${match.stadium}\n`;
}

function buildScore(score) {
    if (score == null) {
        return '';
    }
    return score;
}

module.exports = {
    MatchLine,
}