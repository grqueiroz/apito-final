const repository = require('./repository');

const find = async (filter) => {
    return await repository.find(filter);
}

module.exports = {
    find,
}