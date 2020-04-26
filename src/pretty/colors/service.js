const chalk = require('chalk');

const UNIT = ` `;
const BULLET = `•`

function getHomeAndAwayFlags(match) {
    
    // console.log(chalk.bgKeyword('blue')(` `) + chalk.bgKeyword('white')(` `) + chalk.bgKeyword('red')(` `) + ` Fortaleza 7 x 1 São Paulo ` + chalk.bgKeyword('red')(` `) + chalk.bgKeyword('white')(` `) + chalk.bgKeyword('black')(` `) + `\n`);

    const homeFlag = buildBulletFlag(match.homeColors);
    const awayFlag = buildBulletFlag(match.awayColors);

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

function buildBulletFlag(flag) {
    return`${chalk.keyword(getFlagColor(flag, 0))(BULLET)}` +
    `${chalk.keyword(getFlagColor(flag, 1))(BULLET)}` +
    `${chalk.keyword(getFlagColor(flag, 2))(BULLET)}`;
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