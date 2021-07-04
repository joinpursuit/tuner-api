//DEPENDENCIES
const express = require("express");
const cors = require("cors");



//CONFIGURATION
const app = express();
const songsController = require("./controllers/songsController.js")


//MIDDLEWARE
app.use(express.json());
app.use(cors());



//ROUTES

//Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Tuner");
});

// "/songs" Route
app.use("/songs", songsController);

//Page not found Route
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});



//EXPORTS
module.exports = app;