const express = require("express");
const cors = require('cors');
const App = express();
const songs = require('./controllers/songsController');

//Middleware
App.use(cors());
App.use(express.json());

App.use('/songs', songs);

App.get('/', (req, res) => {
    res.status(200).send('Welcome to Tuner')
});

App.get('*', (req, res) => {
    res.status(404).send("this is not the page you are looking for")
})


module.exports = App;