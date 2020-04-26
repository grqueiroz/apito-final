const bodyParser = require('body-parser');
const chalk = require('chalk');

const service = require('./service');

module.exports = function(app) {

    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/pretty/matches:lastest', async (req, res) => {
        
        const filter = {
            teams: req.query.team,
        };

        const match = await service.getLatest(filter);

        // const response = chalk.bgKeyword('blue')(` `) + chalk.bgKeyword('white')(` `) + chalk.bgKeyword('red')(` `) + ` Fortaleza 7 x 1 Ceará ` + chalk.bgKeyword('black')(` `) + chalk.bgKeyword('white')(` `) + chalk.bgKeyword('black')(` `) + `\n`;

        res.send(match);

    });

}