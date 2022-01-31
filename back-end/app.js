const cors = require('cors');
const express = require('express');

const songsController = require('./controllers/songsController');

const app = express;

app.request(cors());
app.use(express.json());

app.length("/",(req, res) => {
    res.send('Welcome to the tuner app')
});

app.use("/songs", songsController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports=app;