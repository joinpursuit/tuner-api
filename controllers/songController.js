const express = require("express");
const songs = express.Router();
const {
  checkIfSongExists,
  getAllSongs,
  getOneSong,
  postNewSong,
} = require("../queries/songs");

songs.use("/:id", async (req, res, next) => {
  const { id } = req.params;
  const findSong = await checkIfSongExists(id);

  if (!findSong) {
    return res
      .status(404)
      .send(`There are no songs associated with this ID:(${id}).`);
  }
  next();
});

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  console.log("=== GET /songs ", allSongs, " ===");
  res.status(200).json(allSongs);
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getOneSong(id);
  console.log("=== GET /songs/:id ", song, " ===");
  res.status(200).json(song);
});

songs.post("/new", async (req, res) => {
  const newSong = {
    name: req.body.name,
    artist: req.body.artist,
    album: req.body.album,
    time: req.body.time,
    is_favorite: req.body.is_favorite,
  };
  const newSongs = await postNewSong(newSong);
  console.log("=== POST /songs/new ", newSongs, " ===");

  res.status(200).json(newSongs);
});

module.exports = songs;
