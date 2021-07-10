const { fetchALLSongs, getSong, createSong } = require("../queries/songs");
const songsController = require("express").Router();

songsController.get("/", async (req, res) => {
  const songs = await fetchALLSongs();
  res.json(songs);
});

songsController.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  res.json(song);
});

songsController.post("/", async (req, res) => {
  const newSong = await createSong(req.body);
  res.json(newSong);
});
module.exports = songsController;
