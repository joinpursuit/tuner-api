const express = require("express");
const lyrics = express.Router();
const getAllLyrics = require("../quries/lyrics");

lyrics.get("/", async (req, res) => {
  const allLyrics = await getAllLyrics();
  res.json(allLyrics);
});

module.exports = lyrics;
