//DEPENDENCIES
const express = require("express");
const { getAllSongs } = require("../queries/songs");

//CONFIGURATION
const songs = express.Router();

//ROUTES
songs.get("/", async (req, res) => {
  const songs = await getAllSongs();
  res.json({ success: true, payload: songs });
});

//EXPORT
module.exports = songs;
