const bodyParser = require('body-parser');
const service = require('./service');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/matches/team::team', async (req, res) => {
        
        const team = req.params.team;

        const matches = await service.findByTeam(team);

        res.send(matches);

    });

    app.get('/api/matches/round::round', async (req, res) => {
        
        const round = req.params.round;

        const matches = await service.findByRound(round);

        res.send(matches);

    });

}