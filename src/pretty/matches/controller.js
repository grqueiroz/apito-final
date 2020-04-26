const bodyParser = require('body-parser');

const service = require('./service');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/pretty/matches:lastest', async (req, res) => {
        
        const filter = {
            teams: req.query.team,
        };

        const match = await service.getLatest(filter);

        res.send(match);

    });

}