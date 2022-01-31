const express = require("express");
const songs = express.Router();
const { getAllSongs, addNewSong } = require("../queries/songs");

songs.get("/", async (req, res) => {
  console.log("Get Request");
  const songs = await getAllSongs();
  console.log(songs);
  res.status(200).json(songs);
});

songs.post("/new", async (req, res) => {
  const newSong = req.body;
  console.log(newSong);
  const addSong = await addNewSong(newSong);
  res.status(200).json(addSong);
});

module.exports = songs;
