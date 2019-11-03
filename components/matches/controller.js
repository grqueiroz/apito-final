const bodyParser = require('body-parser');
const service = require('./service');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/matches/:team', async (req, res) => {
        const team = req.params.team;

        const matches = await service.findByTeam(team);

        res.send(matches);

    });

}