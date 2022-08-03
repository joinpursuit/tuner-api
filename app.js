//dependencies
const express = require('express');
const cors = require('cors');
const songsController = require('./controllers/songController');

//configuration
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use('/songs', songsController);

// routes
app.get('/', (req, res) => {
  res.send('Welcome to Tuner');
});

app.get('*', (req, res) => {
  res.status(404).send('Figure it out yourself!');
});

module.exports = app;
