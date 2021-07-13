const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getOneSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json(allSongs);
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const theSong = await getOneSong(id);
    if (theSong["id"]) {
      res.json(theSong);
    } else {
      console.log(`Database error: ${bookmark}`);
      throw `There are no songs with id: ${id}`;
    }
  } catch (error) {
    res.status(404).json({ error: "Resource not found.", message: error });
  }
});

songs.post("/", async (req, res) => {
  const newSong = req.body;
  try {
    const song = await createSong(newSong);
    res.json(song);
  } catch (error) {
    res.status(404).json({ error: "error" });
  }
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await deleteSong(id);
    res.json(song);
  } catch (error) {
    console.log(error);
  }
});

songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedSong = req.body
  try {
    const song = await updateSong(id, updatedSong);
    res.json(song);
  } catch (error) {
    console.log(error);
  }
});

module.exports = songs;
