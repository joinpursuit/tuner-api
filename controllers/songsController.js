const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong } = require("../queries/songs");

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json(allSongs);
});

// SHOW
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    if (song["id"]) {
      res.json(song);
    } else {
      console.log(`Database error: ${song}`);
      throw `There is no bookmark with id: ${id}`;
    }
  } catch (e) {
    res.status(404).json({ error: "Resource not found.", message: e });
  }
});

// CREATE
songs.post("/", async (req, res) => {
  try {
    const song = await createSong(req.body);
    if (song["id"]) {
      res.json(song);
    } else {
      console.log(`Database error: ${song}`);
      throw `Error adding ${req.body} to the database.`;
    }
  } catch (err) {
    res.status(404).json({ error: err });
  }
});

module.exports = songs;
