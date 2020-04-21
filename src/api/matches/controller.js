const bodyParser = require('body-parser');
const service = require('../../components/matches/service');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/matches', async (req, res) => {
        
        const filter = {
            teams: req.query.team,
            competition: req.query.competition,
            round: req.query.round,
            startingDate: req.query.startingDate
        };

        const matches = await service.find(filter);

        res.send(matches);

    });

}