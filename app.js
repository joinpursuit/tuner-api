///Dependencies
const express = require('express');
const cors = require('cors');
const app = express();
const songRouter = require('./routes/songRoutes');

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Tuner App!');
});

app.use('/songs', songRouter);

app.get('*', (req, res) => {
  res.json({
    status: 'fail',
    error: 'Page Not Found',
  });
});

module.exports = app;
