const dotenv = require('dotenv');

dotenv.config();

module.exports = {

    dbConnectionString:  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0-gqzqm.mongodb.net/apito-final?retryWrites=true&w=majority`,
    port: process.env.PORT

}