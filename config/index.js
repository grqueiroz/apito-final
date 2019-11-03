const config = require('./config')

module.exports = {

    getDbConnectionString: function() {

        url = `mongodb+srv://${config.username}:${config.password}@cluster0-gqzqm.mongodb.net/apito-final?retryWrites=true&w=majority`;
        console.log(url);

        return url;
    }

}