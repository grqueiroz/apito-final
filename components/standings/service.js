const repository = require('./repository');

const find = async (round) => {

    return await repository.find(round);

}

module.exports = {
    find
}