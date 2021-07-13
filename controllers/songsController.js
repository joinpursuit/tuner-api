const express = require("express");
const songs = express.Router();

const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

songs.get("/", async (req, res) => {
  const songs = await getAllSongs();
  res.json({ success: true, payload: songs });
});

songs.post("/", async (req, res) => {
  const newSong = req.body;
  const result = await createSong(newSong);
  res.json(result);
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song) {
    res.json({ success: true, payload: song });
  } else {
    res.redirect("/404");
  }
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  res.json(deletedSong);
});

songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { name, artist, album, time } = body
  if(!name || ! artist || !album || !time) {
    res.status(422).json({ success: false, message: "What are you doing? You have to complete all the fields." })
  } else {
    const updatedSong = await updateSong(id, body);
    res.json(updatedSong);
  }
});

module.exports = songs;
