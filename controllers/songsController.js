const { request, response } = require("express");
const express = require("express");
const { json } = require("express/lib/response");
const songs = express.Router();
const {
  getAllSongs,
  addNewSong,
  getSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

//display all songs
songs.get("/", async (req, res) => {
  console.log("Get Request");
  const songs = await getAllSongs();
  if (songs) {
    res.status(200).json(songs);
  } else {
    response.status(404).json("Song not found");
  }
});

//display specific song
songs.get("/:id", async (request, response) => {
  console.log(`GET request for id ${request.params.id}`);
  const song = await getSong(request.params.id);
  if (song) {
    response.status(200).json(song);
  } else {
    response.status(404).json("Song not found");
  }
});

//delete song
songs.delete("/:id", async (request, response) => {
  console.log(`DELETE request for id ${request.params.id}`);
  const song = await deleteSong(request.params.id);
  if (song.id) {
    response.status(200).json(song);
  } else {
    response.status(404).json("Song does not exist");
  }
});

//add new song
songs.post("/new", async (request, response) => {
  const newSong = request.body;
  console.log(newSong);
  const addSong = await addNewSong(newSong);
  response.status(200).json(addSong);
});

//edit song
songs.put("/:id", async (request, response) => {
  console.log(`Edit song at ${request.params.id}`);
  const song = updateSong(request.params.id, request.body);
  if (song.id) {
    response.status(200).json(song);
  } else {
    response.status(404).json("Song not found");
  }
});

module.exports = songs;
