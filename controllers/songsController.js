const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

// GET ALL SONGS
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json(allSongs);
});

// SHOW ONE SONG
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    // res.json({ success: true, payload: song });
    if (song["id"]) {
      res.json(song);
    } else {
      console.log(`Database error: ${song}`);
      throw `There is no song with id: ${id}`;
    }
  } catch (e) {
    res.status(404).json({ error: "Resource not found.", message: e });
  }
});

// CREATE A SONG
songs.post("/", async (req, res) => {
  try {
    const song = await createSong(req.body);
    if (song["id"]) {
      res.json(song);
    } else {
      console.log(`Database error: ${song}`);
      throw `Error adding ${req.body} to the database.`;
    }
  } catch (e) {
    res.status(404).json({ error: e });
  }
});

// DELETE A SONG
songs.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    res.status(200).json(deletedSong);
  } catch (e) {
    res.status(404).json({ error: e });
  }
});

// UPDATE A Song
songs.put("/:id", async (req, res) => {
  try {
    const { body, params } = req;
    const { id } = params;
    const updatedSong = await updateSong(id, body);
    res.status(200).json(updatedSong);
  } catch (e) {
    res.status(404).json({ error: e });
  }
});

module.exports = songs;
