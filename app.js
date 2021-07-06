const express = require('express');
const cors = require('cors');
const songsController = require('./controllers/songsController');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Tuner APP!');
});

app.use('/songs', songsController);

app.get('*', (req, res) => {
    res.status(404).send('Page not found!');
});

module.exports = app;