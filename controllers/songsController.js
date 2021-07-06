const express = requiree("express");
const songs = express.Router();
const { getAllSongs } = require("../queries/songs");

songs.get("/", (req, res) => {
  const allSongs = await getAllSongs();
  res.json(allSongs);
});

songs.get("/", (req, res) => {
  res.status(200);f
});

module.exports = songs;
