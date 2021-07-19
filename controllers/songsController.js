// Dependencies
const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong } = require("../queries/songs");

// Index
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json({
    success: true,
    payload: allSongs,
  });
});

// Show
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong();
  } catch (error) {
    return error;
  }
});

module.exports = songs;
