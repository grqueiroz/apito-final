const repository = require('./repository');

const findByTeam = async (team) => {

    return await repository.findByTeam(team);

}

const findByRound = async (round) => {

    return await repository.findByRound(round);

}

module.exports = {
    findByTeam,
    findByRound
}