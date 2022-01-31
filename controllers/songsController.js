const express = require('express');
const { getAllSongs } = require('../queries/song');
const music = express.Router();

const favSongs = require('../models/songs');

music.get('/', async (req, res) => {
    const songs = await getAllSongs();
    console.log(songs)
    res.status(200).json(songs)
});

music.get("/", async (req, res) => {
    const getAllSongs = await getAllSongs();
    if (getAllSongs[0]) {
      res.status(200).json(getAllSongs);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });


module.exports = music;