const express = require('express');
const cors = require('cors');
const tunerController = require('./controllers/tunerController');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/songs', tunerController);

app.get('/', (request, response) => {
  response.send('Welcome to Tuner');
});

app.get('*', (request, response) => {
  response.status(404).send('Oops, something went wrong!');
});
module.exports = app;
