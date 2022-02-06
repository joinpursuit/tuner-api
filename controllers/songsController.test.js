const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  updateSong,
  deleteSong,
} = require("../queries/songs");

//INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json(allSongs);
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    if (song.id) {
      res.status(200).json(song);
    } else {
      res.status(500).json({ error: "Song not found" });
    }
  } catch (err) {
    return err;
  }
});

songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(id, req.body);
  if (updatedSong.id) {
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json("Song not found");
  }
});

songs.post("/", async (req, res) => {
  const { body } = req;
    const newSong = await createSong(body);
    console.log(body);
    if (newSong.id) {
      res.status(200).json(newSong);
    } else {
      res.status(500).json({ error: "Song creation error" });
    }
  
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json({ error: "Song not found" });
  }
});

module.exports = songs;
