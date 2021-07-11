const express = require("express");
const cors = require("cors");
const songsController = require('./controllers/songsController');

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send("Welcome");
});

app.use('/songs', songsController)

app.get("*", (req, res) => {
    res.status(404).send("Page not Found");
});

module.exports = app;