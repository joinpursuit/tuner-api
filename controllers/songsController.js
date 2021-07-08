const express = require("express");
const songs = express.Router();
//Have to destructure
const {getAllSongs} = require("../queries/songs.js")


// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs()
  res.json( allSongs );
});



module.exports = songs;
