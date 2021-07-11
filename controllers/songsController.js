const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong } = require("../queries/songs");

songs.get("/", async (req, res) => {
  const songs = await getAllSongs();
  res.json(songs);
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    if (song["id"]) {
      res.json(song);
    } else {
      throw `No song at ${id}`;
    }
  } catch (e) {
    res.status(404).send({ error: "Resource not found", message: e });
  }
});


module.exports = songs;
