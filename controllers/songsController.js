const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong } = require("../queries/songs");

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json({ success: true, payload: allSongs });
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    res.json({ success: true, payload: song });
  } catch (err) {
    return err;
  }
});

module.exports = songs;
