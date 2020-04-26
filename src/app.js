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

// console.log(chalk.bgKeyword('blue')(` `) + chalk.bgKeyword('white')(` `) + chalk.bgKeyword('red')(` `) + ` Fortaleza 7 x 1 São Paulo ` + chalk.bgKeyword('red')(` `) + chalk.bgKeyword('white')(` `) + chalk.bgKeyword('black')(` `) + `\n`);

// console.log(chalk.bgKeyword('blue')(` `) + chalk.bgKeyword('white')(` `) + chalk.bgKeyword('red')(` `) + ` Fortaleza 7 x 1 Avaí ` + chalk.bgKeyword('lightskyblue')(` `) + chalk.bgKeyword('white')(` `) + chalk.bgKeyword('lightskyblue')(` `) + `\n`);