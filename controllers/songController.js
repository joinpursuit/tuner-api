const express = require("express");
const songs = express.Router();
// const db = require("../db/dbConfig.js");
const { getAllSongs, getASong } = require("../queries/songs");

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  // const allSongs = await db.any("SELECT * FROM songs");
  if (allSongs) {
    res.json({ success: true, payload: allSongs });
  } else {
    res.status(404).json({ success: false, message: "Something went wrong" });
  }
});

//INDIVIDUAL
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getASong(id);
  if (song) {
    res.status(200).json({ sucess: true, payload: song });
  } else {
    res.status(404).send(`No such song with id of ${id}`);
  }
});

module.exports = songs;
