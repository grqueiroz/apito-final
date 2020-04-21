const bodyParser = require('body-parser');
const service = require('@components/standings/service');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/standings', async (req, res) => {
        
        const filter = {
            competition: req.query.competition,
            round: req.query.round
        };

        const standings = await service.find(filter);

        res.send(standings);

    });

}