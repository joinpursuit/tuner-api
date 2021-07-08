const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

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

//DELETE
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSong = await deleteSong(id);
    if (deletedSong["id"]) {
      res.status(200).json(deletedSong);
    } else {
      console.log(`Database error: ${song}`);
      throw `Could not delete song with id: ${id}`;
    }
  } catch (err) {
    res.status(404).json({
      error: "Resource can not be deleted. Please try again.",
      message: err,
    });
  }
});

// UPDATE
songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSong = await updateSong(id, req.body);
    if (updatedSong["id"]) {
      res.status(200).json(updatedSong);
    } else {
      console.log(`Database error: ${song}`);
      throw `Could not update song with id: ${id}`;
    }
  } catch (err) {
    res.status(404).json({
      error: "Resource can not be updated. Please try again.",
      message: err,
    });
  }
});

module.exports = songs;
