const express = require("express");
const playlists = express.Router();
const playlistSongs = require("./playlistsongsController");
const {
  getAllPlaylists,
  getOnePlaylist,
  createPlaylist,
  deletePlaylist,
} = require("../queries/playlistsqueries");

playlists.use("/:playlists_id/songs", playlistSongs);

//INDEX ROUTE
playlists.get("/", async (req, res) => {
  const allPlaylists = await getAllPlaylists();
  if (allPlaylists) {
    res.json(allPlaylists);
  } else {
    res.status(404).json("Error in returning All Songs Index");
  }
});

//SHOW INDIVIDUAL SONGS

playlists.get("/:id", async (req, res) => {
  const { id } = req.params;
  const playlist = await getOnePlaylist(id);
  if (playlist) {
    res.status(200).json(playlist);
  } else {
    res.status(404).send(`No such anime w/  ID ${req.params.id}`);
  }
});

//CREATE ROUTE //

playlists.post("/", async (req, res) => {
  const newPlaylist = await createPlaylist(req.body);
  res.json(newPlaylist);
});

//DELETE ROUTE

playlists.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await deletePlaylist(id);
  if (deleted.id) {
    res.status(200).json(deleted);
  } else {
    res.status(404).json("Playlist not found");
  }
});

module.exports = playlists;
