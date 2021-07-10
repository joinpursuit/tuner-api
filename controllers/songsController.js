const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong } = require("../queries/songs");

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json(allSongs);
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    if (song["id"]) {
      res.json(song);
    } else {
      console.log(`Database error: ${song}`);
      throw `There is no song with id: ${id}`;
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "Resource not found", message: err });
  }
  
});

module.exports = songs;
