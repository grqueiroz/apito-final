const bodyParser = require('body-parser');

const utils = require('@utils/webUtils');
const service = require('@components/matches/service');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/matches', async (req, res) => {

        const teams = req.query.team
        var searchNames = Array.isArray(teams) ? utils.toSearchName(teams) : utils.toSearchName(Array.of(teams))
        
        const filter = {
            teams: searchNames,
            competition: req.query.competition,
            round: req.query.round,
            startingDate: req.query.startingDate
        };

        const matches = await service.find(filter);

        res.send(matches);

    });

}