const express = require('express');
const cors = require('cors');
const routes = require('./controllers/songsController');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', routes);
app.use('*', (req, res) => {
  res.status(404).send('<h1>Page not found</h1>');
});

module.exports = app;
