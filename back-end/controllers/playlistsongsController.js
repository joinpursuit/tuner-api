const express = require("express");
const playlistsongs = express.Router({ mergeParams: true });
const {
  getAllPlaylistSongs,
  addSong,
  deletePlaylistItem,
} = require("../queries/playlistsongsqueries");

playlistsongs.get("/", async (req, res) => {
  const { playlists_id } = req.params;
  const allSongs = await getAllPlaylistSongs(playlists_id);
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    console.error(allSongs);
    res.status(500).json({ error: "Cant get all playlist songs" });
  }
});

// playlistsongs.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const review = await getReview(id);
//   if (review) {
//     res.json(review);
//   } else {
//     res.status(404).json({ error: "not found" });
//   }
// });

// Create
playlistsongs.post("/", async (req, res) => {
  try {
    const { playlists_id } = req.params;
    const addToPlaylist = await addSong(playlists_id, req.body);
    res.json(addToPlaylist);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//DELETE
playlistsongs.delete("/:song_id", async (req, res) => {
  const deleted = await deletePlaylistItem(req.params);
  if (deleted) {
    if (deleted.id) {
      res.status(200).json(deleted);
    } else {
      res.status(404).json({ error: "Bookmark not found" });
    }
  } else {
    console.error(deletedReview);
    res.status(500).json({ error: "server error" });
  }
});

module.exports = playlistsongs;
