const bodyParser = require('body-parser');

const utils = require('@utils/webUtils');
const service = require('./service');

module.exports = function(app) {

    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/pretty/matches:lastest', async (req, res) => {
        
        const filter = {
            teams: utils.toSearchName(Array.of(req.query.team)),
        };

        const match = await service.getLatest(filter);

        res.send(match);

    });

    app.get('/:team', async (req, res) => {
        
        const filter = {
            teams: utils.toSearchName(Array.of(req.params.team)),
        };

        const matches = await service.getSummary(filter);

        res.set('Content-Type', 'text/plain; charset=utf-8');
        res.send(matches);
    });

}