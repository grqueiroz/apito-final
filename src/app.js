const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const matchesController = require('./components/matches/controller');
const standingsController = require('./components/standings/controller');
const setupController = require('./setup/controller');

const app = express();

const port = config.port || 3000;

mongoose.connect(
    config.dbConnectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

setupController(app);
matchesController(app);
standingsController(app);

console.log(`Starting application at port ${port}`);

app.listen(port);