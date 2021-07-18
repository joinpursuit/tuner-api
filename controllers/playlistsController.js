const express = require("express");
const playlists = express.Router();
const songsController = require("./songsController");

const {
  getAllPlaylists,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
} = require("../queries/playlists");

playlists.use("/:playlist_id/songs", songsController);

playlists.get("/", async (req, res) => {
  const playlists = await getAllPlaylists();
  res.json({
    success: true,
    payload: playlists,
  });
});

playlists.get("/:id", async (req, res) => {
  const { id } = req.params;
  const playlist = await getPlaylist(id);
  res.json({ success: true, payload: playlist });
});

playlists.post("/", async (req, res) => {
  const newPlaylist = req.body;
  const result = await createPlaylist(newPlaylist);
  res.json(result);
});

playlists.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { playlistName } = body;

  if (!playlistName) {
    res.status(422).json({
      error: true,
      success: false,
      message: "please complete",
    });
  } else {
    const result = await updatePlaylist(params.id, body);
    res.json(result);
  }
});

playlists.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPlaylist = await deletePlaylist(id);
  res.json({ success: true, payload: deletedPlaylist });
});

module.exports = playlists;
