require('module-alias/register');
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const controllerManager = require('@middleware/controllerManager');

const app = express();

const port = config.port || 3000;

mongoose.connect(
    config.dbConnectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

controllerManager.register(app);

console.log(`Starting application at port ${port}`);

app.listen(port);