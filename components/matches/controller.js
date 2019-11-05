const bodyParser = require('body-parser');
const service = require('./service');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/matches', async (req, res) => {
        
        const teams = req.query.team;
        const competition = req.query.competition;
        const round = req.query.round;

        const matches = await service.find(teams, competition, round);

        res.send(matches);

    });

}