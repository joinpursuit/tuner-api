const express = require("express");
const Genre = express.Router();
const getAllGenre = require("../quries/Genre");

Genre.get("/", async (req, res) => {
    const allGenre = await getAllGenre();
    res.json(allGenre);
  });
  
  module.exports = Genre;