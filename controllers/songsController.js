//using express
const express = require("express");
//want to use router method to list as starting path assists with routing
const songs = express.Router();
const { getAllSongs } = require("../queries/songs");

songs.get("/", async (request, response) => {
  const songs = await getAllSongs();
  console.log(songs);
  console.log("this is the songs page working");
  response.send(songs);
});

module.exports = songs;
