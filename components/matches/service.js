const repository = require('./repository');

const findByTeam = async (team) => {

    return await repository.findByTeam(team);

}

module.exports = {
    findByTeam
}