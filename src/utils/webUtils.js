function toSearchName(names) {
    return names.map(name => {
        let searchName = decode(name).replace('_', ' ');
        searchName = searchName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        searchName = searchName.toLowerCase();

        return searchName;
    })
}

function decode(value) {
    try {
        return decodeURI(escape(value));
    } catch (e) {
        if (e instanceof URIError) {
            return value;
        }
    };
}

module.exports = {
    toSearchName,
}