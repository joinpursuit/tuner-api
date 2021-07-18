const cors = require("cors");
const express = require("express");
const playlists = require( "./controllers/playListsController")
// const songs = require("./controllers/songsController")
// const albums = require("./controllers/albumsController")
const app = express();


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Our Tuner App");
});
app.use("/playlists",playlists);
// app.use("/songs",songs)
// app.use("/albums",albums)
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });

module.exports = app;