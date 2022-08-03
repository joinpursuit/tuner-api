//dependencies
const express = require("express");
const songs = express.Router();
const { getAllSongs } = require("../queries/songs");

//get the database
const db = require("../db/dbConfig");

//index route of songs
songs.get("/", async (req, res) => {
  //any() coming from the pg promise, first argument is sql command,
  //.any will take anything the sql command return
  const allSongs = await getAllSongs();
  res.json(allSongs);
});

//route to post new song
songs.post("/new", async (req, res) => {
  const newSong = req.body;
  const { name, artist, album, time, is_favorite } = newSong;

  console.log(name, artist, album, time, is_favorite);

  const newSongs = await db.any(
    "INSERT INTO songs (name,artist,album,time,is_favorite) VALUES ($1,$2,$3,$4,$5) RETURNING *",
    [name, artist, album, time, is_favorite]
  );

  res.status(200).json({ success: true, song: newSongs });
});

//route get individual song back
songs.get("/:id", (req, res) => {});

//export the sub router of songs
module.exports = songs;
