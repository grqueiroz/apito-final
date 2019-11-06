const repository = require('./repository');

const find = async (competition, round) => {

    return await repository.find(competition, round);

}

module.exports = {
    find
}