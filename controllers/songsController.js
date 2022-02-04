const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  updateSong,
  deleteSong,
} = require("../queries/songs.js");

// get all songs
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  console.log(allSongs);
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// get a specific song
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    if (song.id) {
      res.status(200).json(song);
    } else {
      res.status(500).json({ error: "song not found." });
    }
  } catch (err) {
    console.log(err);
  }
});

// create a new song
songs.post("/", async (req, res) => {
  const { body } = req;
  try {
    const createdSong = await createSong(body);
    if (createdSong.id) {
      res.status(200).json(createdSong);
    } else {
      res.status(500).json({ error: "Song creation error." });
    }
  } catch (err) {
    console.log(err);
  }
});

// update a song
songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updatedSong = await updateSong(id, body);
  console.log(updatedSong);
  if (updatedSong.id) {
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json({ error: "Song not found." });
  }
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json({ error: "Song was not found." });
  }
});

module.exports = songs;
