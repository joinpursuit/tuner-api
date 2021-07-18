const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  updateSong,
  deleteSong,
} = require("../queries/songs");

songs.get("/", async (req, res) => {
  const songs = await getAllSongs();
  res.json({success: true, payload: songs});
});

songs.post("/", async (req, res) => {
  try {
    const song = await createSong(req.body);
    if (song["id"]) {
      res.json(song);
    } else {
      console.log(`database ${song}`);
    }
  } catch (e) {
    res.status(404).json({ error: "Resource not found", message: e });
  }
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

songs.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { name, artist, album, time } = body;
  if (!name || !artist || !album || !time) {
    res.status(422).json({
      error: true,
      success: false,
      message: "did not update",
    });
  } else {
    const updatedSong = await updateSong(params.id, body);
    res.json(updatedSong);
  }
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  res.json({ success: true, payload: deletedSong });
});

module.exports = songs;
