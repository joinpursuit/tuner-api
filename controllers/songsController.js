const express = require("express");
const { getAllSongs } = require("../queries/songs");
const songs = express.Router();


songs.get("/", async (req, res) => {
 const allSongs = await getAllSongs()
 res.json(allSongs)
});

module.exports = songs;