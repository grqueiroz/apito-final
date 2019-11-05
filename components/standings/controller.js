const bodyParser = require('body-parser');
const service = require('./service');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/standings', async (req, res) => {
        
        const round = req.query.round;

        const standings = await service.find(round);

        res.send(standings);

    });

}