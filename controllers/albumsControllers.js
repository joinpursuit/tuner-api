const express = require("express");
const Albums = express.Router();
const getAllAlbums = require("../quries/Albums");

Albums.get("/", async (req, res) => {
    const allAlbums = await getAllAlbums();
    res.json(allAlbums);
  });
  
  module.exports = Albums;