const bodyParser = require('body-parser');
const service = require('./service');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/standings/round::round', async (req, res) => {
        
        const round = req.params.round;

        const standings = await service.findByBaseRound(round);

        res.send(standings);

    });

}