const express = require("express");
const songs = express.Router();
const {
  fetchAllSongs,
  fetchSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

songs.get("/", async (req, res) => {
  const allSongs = await fetchAllSongs();
  res.json({ Success: true, Payload: allSongs });
});

songs.post("/", async (req, res) => {
  const newSong = req.body;
  const result = await createSong(newSong);
  res.json({ Success: true, Payload: result });
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await fetchSong(id);
  res.json({ Sucess: true, Payload: song });
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  res.json({ Success: true, Payload: deletedSong });
});

songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { name, artist, album, time, is_favorite } = body;
  if (!name || !artist || !album || !time || !is_favorite) {
    res
      .status(422)
      .json({ Error: true, Success: false, Message: "Fix according to type" });
  } else {
    const result = await updateSong(id, body);
    res.json({ Success: true, Payload: result });
  }
});

module.exports = songs;
