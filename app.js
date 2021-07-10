// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const songs = require("./controllers/songsController");
const songsController = require("./controllers/songsController");
const { getAllSongs } = require("./queries/songs");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/songs", songsController);
app.get("/", (req, res) => {
	res.send("Welcome to Tuner App");
});

// 404 PAGE
app.get("*", (req, res) => {
	res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
