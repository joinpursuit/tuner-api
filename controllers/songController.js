const express = require("express");
const db = require("../db/dbConfig");
const songs = express.Router();
// const db = require("../db/dbConfig.js");
const {
  getAllSongs,
  getASong,
  createASong,
  updateASong,
  deleteASong,
} = require("../queries/songs");
const { checkName, checkBoolean } = require("../validation/validation");

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  // const allSongs = await db.any("SELECT * FROM songs");
  if (allSongs) {
    res.json(allSongs);
  } else {
    res.status(404).json({ message: "Something went wrong" });
  }
});

// INDIVIDUAL
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getASong(id);
  if (song) {
    res.status(200).json(song);
  } else {
    res.status(404).send(`No such song with id of ${id}`);
  }
});

// POST
songs.post("/new", checkName, checkBoolean, async (req, res) => {
  const newSong = await createASong(req.body);
  if (newSong) {
    res.status(200).json(newSong);
  } else {
    res.status(404).send("Make sure all fields are valid.");
  }
});

// PUT
songs.put("/:id", checkName, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateASong(id, req.body);
  if (updatedSong) {
    res.status(200).json(updatedSong);
  } else {
    res
      .status(404)
      .send(`Song with id of ${id} or one of the fields is invalid.`);
  }
});

// DELETE
songs.delete("/:id", async (req, res) => {
  const deletedSong = await deleteASong(req.params.id);
  if (deletedSong) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).send(`Song with id of ${id} does not exist.`);
  }
});

module.exports = songs;
