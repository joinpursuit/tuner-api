const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs.js");

// INDEX
songs.get("/", async (req, res) => {
  try {
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
      res.status(200).json(allSongs);
    } else {
      res.status(500).json({ error: "server error" });
    }
  } catch (err) {
    console.log(err);
  }
});

songs.get("/:id", async (req))

module.exports = songs;
