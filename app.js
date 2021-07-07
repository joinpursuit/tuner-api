const express = require("express");
const cors = require("cors");
const songsController = require("./controllers/songsController");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/songs", songsController);

app.get("/", (req, res) => {
    res.status(200).send("Get ready for the tunes!");
});

app.get("*", (req, res) => {
    res.status(404).send("No music! (claps hands)");
});

module.exports = app;