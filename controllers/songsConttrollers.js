const express = require("express");
const songs = express.Router();

songs.get("/", (_, response) => {
  response.json(songsArray);
});

songs.get("/:index", (require, response) => {
  songsArray[require.params.index]
    ? response.json(songsArray[require.params.index])
    : response.status(404).json({ error: "Page not found" });
});

songs.post("/", (require, response) => {
  songsArray.push(require.body);
  response.json(songsArray);
});

songs.delete("/:index", (require, response) => {
  if (songsArray[require.params.index]) {
    const [deletedSongs] = songsArray.splice(require.params.index, 1);
    response.status(200).json(songsArray);
  }
});
songs.put("/:index", (require, response) => {
  songsArray[require.params.index] = require.body;
  response.status(200).json(songsArray);
});

module.exports = songs;
