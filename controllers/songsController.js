const express = require("express");
const songs = express.Router();
const { getAllSongs } = require("../queries/songs");
const { getSong } = require("../queries/songs");
const { deleteSong } = require("../queries/songs");
const { updateSong } = require("../queries/songs");
const { createSong } = require("../queries/songs");

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json(allSongs);
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if(song){
    res.json(song);
  }else{
    res.redirect("/404");
  }
});

songs.post("/", async (req, res) => {
  const newSong = req.body;
  const result = await createSong(newSong);
  console.log(result);
  res.json(result);
});

songs.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { name, artist, album, time } = body;
  if (!name || !artist || !album || !time) {
    res.status(422).json({
      error: true,
      success: false,
      message: "not!",
    });
  } else {
    const result = await updateSong(params.id, body);
    res.json(result);
  }
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  res.json({ success: true, payload: deletedSong });
});

module.exports = songs;
