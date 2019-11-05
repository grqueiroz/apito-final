const repository = require('./repository');

const find = async (teams, competition, round) => {

    return await repository.find(teams, competition, round);

}

module.exports = {
    find,
}