const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  addSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

//index
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json(allSongs);
});

//show
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    if (song.id) {
      res.json(song);
    } else {
      res.redirect("/*");
    }
  } catch (error) {
    return error;
  }
});

//create
songs.post("/", async (req, res) => {
  try {
    const song = req.body;
    const newSong = await addSong(song);
    res.json(newSong);
  } catch (error) {
    return error;
  }
});

//update
songs.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const updatedSong = await updateSong(id, body);
    console.log(updatedSong);
    res.status(200).json(updatedSong);
  });

//delete
songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    res.status(200).json(deletedSong);
});

module.exports = songs;
