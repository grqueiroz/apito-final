const Matches = require('../components/matches/model');
const Teams = require('../components/teams/model');
const initialData = require('./setupData');

module.exports = function(app) {

    app.post('/setup/matches', function(req, res) {

        Matches.create(initialData.startingMatches, function(err, results) {
            res.send(results);
        });

    });

    app.post('/setup/teams', function(req, res) {

        Teams.create(initialData.startingTeams, function(err, results) {
            res.send(results);
        });

    });

}