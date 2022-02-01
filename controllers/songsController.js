const e = require("express");
const express = require("express");
const router = express.Router();
const { getAllSongs, oneSong, createSong } = require("../queries/songs");
//get all songs
router.get("/", async (req, res) => {
  const songs = await getAllSongs();
  res.json(songs);
});
//get one song
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await oneSong(id);

  if (song.id) res.json(song);
  else res.redirect("/*");
});
// create a song
router.post("/", async (req, res) => {
  const createdSong = await createSong(req.body);
  if (createdSong.id) res.json(createdSong);
  else res.redirect("/*");
});
module.exports = router;
