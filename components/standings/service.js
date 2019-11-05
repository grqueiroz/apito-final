const repository = require('./repository');

const findByBaseRound = async (round) => {

    return await repository.findByBaseRound(round);

}

module.exports = {
    findByBaseRound
}