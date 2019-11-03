const bodyParser = require('body-parser');
const repository = require('./repository');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/matches/:team', (req, res) => {
        const team = req.params.team;

        const matches = repository.findByTeam(team);
        matches.then(function(results) {
            res.send(results);
        });

    });

}