const express = require("express");
const songs = express.Router(); //helps us be able to set routes
const db = require("../db/dbConfig");
const { updateSong, deleteSong } = require("../queries/songs");

//Index
songs.get("/", async (req, res) => {
  const allSongs = await db.any("SELECT * FROM song");
  res.json({ success: true, payload: allSongs });
  //   console.log(allSongs);
});

//Individual
songs.get("/:id", async (req, res) => {
  //   console.log(req.param.id);
  const song = await db.one("SELECT * FROM song WHERE id=$1", req.params.id);
  if (song) {
    res.status(200).json({ success: true, payload: song });
  } else {
    res.status(400).send(`No song with id of ${req.params.id} exists`);
  }
});

//Create
songs.post("/new", async (req, res) => {
  const newSongs = await db.any(
    "INSERT INTO song (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [
      req.body.name,
      req.body.artist,
      req.body.album,
      req.body.time,
      req.body.is_favorite,
    ]
  );
  res.status(200).json({ success: true, payload: newSongs });
});

//Update
songs.put("/:id", async (req, res) => {
  try {
    const song = await updateSong(req.params.id, req.body);
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//DELETE
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong) {
    if (deletedSong.id) {
      res.status(200).json(deletedSong);
    } else {
      res.status(404).json({ error: "Song not found" });
    }
  } else {
    console.error(deletedSong);
    res.status(500).json({ error: "server error" });
  }
});

module.exports = songs;
