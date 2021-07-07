const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong } = require("../queries/songs");

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json(allSongs);
});

songs.get("/", (req, res) => {
  res.status(200);
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    if (song.id) {
      res.json(song);
    } else {
      throw `There is no song with id: ${id}`;
    }
  } catch (err) {
    res.status(404).json({ error: "Song not found.", message: err });
  }
});

songs.post("/", async (req, res) => {
  try {
    const song = await createSong(req.body);
    if (song.id) {
      res.json(song);
    } else {
      throw `Error adding ${req.body} to the database.`;
    }
  } catch (err) {
    res.status(404).json({ error: err });
  }
});

module.exports = songs;
