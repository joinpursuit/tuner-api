const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, newSong, deleteSong, updateSong} = require("../queries/songs");

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json(allSongs);
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    if (song["id"]) {
      res.json(song);
    } else {
      throw song;
    }
  } catch (e) {
    res.status(404).json({ error: "not found", message: e });
  }
});

songs.post("/", async (req, res) => {
  const song = await newSong(req.body);
  res.json(song);
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  res.status(200).json(deletedSong);
});

songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(id, req.body);
  res.status(200).json(updatedSong);
});

module.exports = songs;
