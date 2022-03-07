const initialData2020 = require('./setupData2020');
const fs = require('fs');

const repository = require('../components/matches/repository')

async function insertAllMatches() {

    // const Cne20File = fs.readFileSync('src/setup/gatheredData/matches/CNE20-matches.json');
    // const Cne20Matches = JSON.parse(Cne20File);

    // const Cbrb19File = fs.readFileSync('src/setup/gatheredData/matches/CBRB19-matches.json');
    // const Cbrb19Matches = JSON.parse(Cbrb19File);

    // const allMatches = [...initialData2020.startingMatches, ...Cbrb19Matches];

    const Cne22File = fs.readFileSync('src/setup/gatheredData/matches/CNE22-matches.json');
    const Cne22Matches = JSON.parse(Cne22File);
    const allMatches = Cne22Matches;

    return await repository.create(allMatches);
}

async function updateAllMatches() {

    const Cne20File = fs.readFileSync('src/setup/gatheredData/matches/CNE20-matches.json');
    const Cne20Matches = JSON.parse(Cne20File);

    const allMatches = [...initialData2020.startingMatches, ...Cne20Matches];

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
}

module.exports = {
    insertAllMatches
}