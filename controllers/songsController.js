const express = require("express");
const songs = express.Router(); //helps us be able to set routes
const db = require("../db/dbConfig");

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

module.exports = songs;
