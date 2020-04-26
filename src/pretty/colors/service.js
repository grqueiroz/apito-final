const chalk = require('chalk');

const UNIT = ` `;

function getHomeAndAwayFlags(match) {
    
    // console.log(chalk.bgKeyword('blue')(` `) + chalk.bgKeyword('white')(` `) + chalk.bgKeyword('red')(` `) + ` Fortaleza 7 x 1 São Paulo ` + chalk.bgKeyword('red')(` `) + chalk.bgKeyword('white')(` `) + chalk.bgKeyword('black')(` `) + `\n`);

    const homeFlag = buildFlag(match.homeColors);
    const awayFlag = buildFlag(match.awayColors);

    return {
        homeFlag,
        awayFlag
    }
}

function buildFlag(flag) {
    return `${chalk.bgKeyword(getFlagColor(flag, 0))(UNIT)}` +
        `${chalk.bgKeyword(getFlagColor(flag, 1))(UNIT)}` +
        `${chalk.bgKeyword(getFlagColor(flag, 2))(UNIT)}`;       
}

function getFlagColor(flag, index) {
    if (index < flag.length) {
        return flag[index];
    } else {
        return getFlagColor(flag, index - flag.length);
    }
}

module.exports = {
    getHomeAndAwayFlags,
}