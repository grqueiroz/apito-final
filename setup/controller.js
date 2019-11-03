const Matches = require('../components/matches/model');
const initialData = require('./setupData');

module.exports = function(app) {

    app.post('/setup/matches', function(req, res) {

        Matches.create(initialData.StartingMatches, function(err, results) {
            res.send(results);
        });

    });

}