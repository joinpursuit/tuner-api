const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  newSong,
  deleteSong,
} = require("../queries/songs");

// GET ALL SONGS
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json(allSongs);
});

// GET SPECIFIC SONG
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    if (song["id"]) {
      res.json(song);
    } else {
      console.log(`Database error: ${song}`);
      throw `There is no song with id: ${id}`;
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "Resource not found", message: err });
  }
});

// ADD A NEW SONG
songs.post("/", async (req, res) => {
  try {
    const song = await newSong(req.body);
    if (song["id"]) {
      res.json(song);
    } else {
      console.log(`Database error: ${song}`);
      throw `Error adding ${req.body} to the database`;
    }
  } catch (err) {
    console.log(err);
  }
});

// DELETE A SONG
songs.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const songToDelete = await deleteSong(id);
    res.status(200).json(songToDelete);
  } catch (err) {
    console.log(err);
  }
});

module.exports = songs;
