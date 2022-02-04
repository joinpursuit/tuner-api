const express = require("express");
const songsRoute = express.Router();
const { getAllSongs } = require("../queries/songQuery");

songsRoute.get("/", async (request, response) => {
  const allSongs = await getAllSongs();
  response.status(200).json(allSongs);
});

module.exports = songsRoute;
