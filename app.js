const express = require('express');
const app = express();
const songsController = require('./controllers/songsController')

app.use(express.json());

app.use('/songs', songsController)

app.get('/', (req, res) => {
    res.send("Music Playlist App");
})

app.get('*', (req, res) => {
    res.status(404).send("Page not Found");
})


module.exports = app;
