// DEPENDENCIES
const cors = require("cors");
const express = require("express");

const songsController = require("./controllers/songsController");
const artistController = require("./controllers/artistController");
const albumController = require("./controllers/albumController");
const playlistController = require("./controllers/playlistController");
const playlistDetailController = require("./controllers/playlistDetailController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// SONG ROUTES

app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

app.use("/songs", songsController);
app.use("/artists", artistController);
app.use("/albums", albumController);
app.use("/playlist", playlistController);
app.use("/playlistdetails", playlistController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
