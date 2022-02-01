const express = require("express");
const router = express.Router();
const { getAllSongs, oneSong } = require("../queries/songs");
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

module.exports = router;
