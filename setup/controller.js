const fs = require('fs');
const Matches = require('@components/matches/model');
const Teams = require('@components/teams/model');
const Stadiums = require('@components/stadiums/model');
const Competitions = require('@components/competitions/model');
const initialData2022 = require('./setupData2022');
const service = require('./service')

module.exports = function(app) {

    app.post('/setup/matches', async function(req, res) {
        
        const createdMatches = await service.insertAllMatches();
        res.send(createdMatches);
    });

    app.put('/setup/matches:update', function(req, res) {

        const Cne22File = fs.readFileSync('src/setup/gatheredData/matches/CNE22-matches.json');
        const Cne22Matches = JSON.parse(Cne22File);

        // const Cbra19File = fs.readFileSync('src/setup/gatheredData/matches/CBRA19-matches.json');
        // const Cbra19Matches = JSON.parse(Cbra19File);

        // const allMatches = [...initialData2022.startingMatches, ...Cne22Matches];
        const allMatches = Cne22Matches;

        console.log(JSON.stringify(allMatches))

        const response = [];

        allMatches.forEach( match => {
            const where = { 
                $and: [
                    { home: match.home },
                    { away: match.away },
                    { round: match.round }
                ]
            };

            const set =  {
                $set: {
                    homeScore: match.homeScore,
                    awayScore: match.awayScore,
                    date: match.date
                }
            };

            Matches.updateOne(
                where,
                set,
                function(err, results) {
                    response.push(results);
                }
            );
        });

        res.send(response);

        console.log("Matches updated")
    });

    app.post('/setup/teams', function(req, res) {

        Teams.create(initialData2022.startingTeams, function(err, results) {
            res.send(results);
        });

    });;

    app.post('/setup/stadiums', function(req, res) {

        Stadiums.create(initialData2022.startingStadiums, function(err, results) {
            res.send(results);
        });

    });

    app.post('/setup/competitions', function(req, res) {

        Competitions.create(initialData2022.startingCompetitions, function(err, results) {
            res.send(results);
        });

    });

    app.post('/setup/all', function(req, res) {

        Matches.create(initialData2022.startingMatches, function(err, results) {
            res.send(results);
        });

        Teams.create(initialData2022.startingTeams, function(err, results) {
            res.send(results);
        });

        Stadiums.create(initialData2022.startingStadiums, function(err, results) {
            res.send(results);
        });

        Competitions.create(initialData2022.startingCompetitions, function(err, results) {
            res.send(results);
        });

    });

}