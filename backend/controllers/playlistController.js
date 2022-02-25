// DEPENDENCIES
const express = require("express");
const playlists = express.Router();
const {
  getAllPlaylists,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
} = require("../../queries/playlist");

// SHOW
playlists.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const playlist = await getPlaylist(id);
    if (playlist.id) {
      res.status(200).json(playlist);
    } else {
      res.status(404).json({ error: "not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

// INDEX
playlists.get("/", async (req, res) => {
  const { order } = req.query;
  const allPLaylists = await getAllPlaylists();

  if (allPLaylists[0]) {
    switch (true) {
      case order === "asc":
        allPLaylists.sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          }
          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          }
          return 0;
        });
        res.status(200).json(allPLaylists);
        break;
      case order === "desc":
        allPLaylists.sort((a, b) => {
          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return -1;
          }
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return 1;
          }
          return 0;
        });
        res.status(200).json(allPLaylists);
        break;
      default:
        res.status(200).json(allPLaylists);
        break;
    }
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// CREATE
playlists.post("/", async (req, res) => {
  try {
    const playlist = await createPlaylist(req.body);
    res.json(playlist);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
playlists.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPlaylist = await deletePlaylist(id);
  if (deletedPlaylist.id) {
    res.status(200).json(deletedPlaylist);
  } else {
    res.status(404).json("Playlist not found");
  }
});

// UPDATE
playlists.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedPlaylist = await updatePlaylist(id, req.body);
  res.status(200).json(updatedPlaylist);
});

// EXPORT
module.exports = playlists;
