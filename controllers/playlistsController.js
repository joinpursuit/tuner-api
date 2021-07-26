const express = require("express");
const playlistsController = express.Router();
const songsController = require("./songsController");

playlistsController.use("/:playlist_id/songs", songsController);

// const playlistsController = require('express').Router({mergeParams: true})
const {
  fetchPlaylists,
  getPlaylist,
  newPlaylistForSongs,
  updatePlaylist,
} = require("../queries/playlists");

playlistsController.get("/", async (req, res) => {
  const playlists = await fetchPlaylists(req.params.playlist_id);
  res.json(playlists);
});

playlistsController.post("/", async (req, res) => {
  const newPlaylist = req.body;
  const created = await newPlaylistForSongs(newPlaylist);
  res.json(created);
});
playlistsController.get("/:id", async (req, res) => {
  const playlist = await getPlaylist(req.params.id);
  res.json(playlist);
});

playlistsController.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { title } = body;
  if (!title) {
    res
      .status(404)
      .json({ error: true, success: false, message: "not found!" });
  } else {
    const result = await updatePlaylist(params.id, body);
    res.json(result);
  }
});
module.exports = playlistsController;
