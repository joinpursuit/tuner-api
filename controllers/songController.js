const express = require("express");
const songs = express.Router();
const db = require("../db/dbConfig.js");
// const { getAllSongs } = require("../queries/songs");

songs.get("/", async (req, res) => {
  // const allSongs = await getAllSongs();
  const allSongs = await db.any("SELECT * FROM songs");
  res.json({ success: true, payload: allSongs });
});
