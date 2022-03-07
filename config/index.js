const dotenv = require('dotenv');

dotenv.config();

module.exports = {

    dbConnectionString:  process.env.MONGODB_URL,
    port: process.env.PORT

}