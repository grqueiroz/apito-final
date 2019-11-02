const express = require('express');
// import mongoose from 'mongoose';
const matchesController = require('./components/matches/matchesController');

const app = express();

const port = process.env.PORT || 3000;

matchesController(app);

app.listen(port);