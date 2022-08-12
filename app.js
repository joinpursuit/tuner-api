// Dependencies
const express = require('express');
const cors = require('cors');
const songController = require('./controllers/songController')

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/songs', songController);

// Routes

// home
app.get('/', (req, res) => {
	res.send('Welcome To Turner');
});

// error page
app.get('*', (req, res) => {
	res.status(404).send('Sorry, this page does not exist!');
});

module.exports = app;
