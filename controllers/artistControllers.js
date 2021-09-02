const express = require("express");
const Artist = express.Router();
const getAllArtist = require("../quries/Artist");

Artist.get("/", async (req, res) => {
    const allArtist = await getAllArtist();
    res.json(allArtist);
  });
  
  module.exports = Artist;