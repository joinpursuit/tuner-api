//dependencies 
const cors = require("cors");
const express = require("express");
const songsController = require("./controllers/songsController.js");

//configuration
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use("/songs", songsController);

app.get("/", (req, res) => {
    res.send("Welcome to Tuner API");
});

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;