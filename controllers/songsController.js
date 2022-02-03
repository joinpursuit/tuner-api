const e = require("express");
const express = require("express");
const router = express.Router();
const {
  getAllSongs,
  oneSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");
const {
  checkNameArtistAlbum,
  isFavorite,
  checkTimeFormat,
} = require("../validation/songs.js");
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
router.post(
  "/",
  checkNameArtistAlbum,
  checkTimeFormat,
  isFavorite,
  async (req, res) => {
    const createdSong = await createSong(req.body);
    if (createdSong.id) res.json(createdSong);
    else res.redirect("/*");
  }
);
//delete a song
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id, req.body);
  if (deletedSong.id) res.json(deletedSong);
  else res.status(404).json({ error: "server error" });
});
router.put(
  "/:id",
  checkNameArtistAlbum,
  checkTimeFormat,
  isFavorite,
  async (req, res) => {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    if (updatedSong.id) res.json(updatedSong);
    else res.status(404).json({ error: "server error" });
  }
);
module.exports = router;
