const express = require("express");
const songs = express.Router({ mergeParams: true });

const {
  getAllSongsFromPlaylist,
  getAscSongs,
  getDescSongs,
  getisFavoriteSongs,
  getisNotFavoriteSongs,
  getSong,
  createSongforPlaylist,
  deleteSong,
  updateSong,
} = require("../queries/songs");

songs.get("/", async (req, res) => {
  const { order, is_favorite } = req.query;
  if (order === "asc") {
    const songs = await getAscSongs();
    res.json({ success: true, payload: songs });
  } else if (order === "desc") {
    const songs = await getDescSongs();
    res.json({ success: true, payload: songs });
  } else if (is_favorite === "true") {
    const songs = await getisFavoriteSongs();
    res.json({ success: true, payload: songs });
  } else if (is_favorite === "false") {
    const songs = await getisNotFavoriteSongs();
    res.json({ success: true, payload: songs });
  } else {
    const songs = await getAllSongsFromPlaylist(req.params.playlist_id);
    res.json({ success: true, payload: songs });
  }
});

songs.post("/", async (req, res) => {
  const { playlist_id } = req.params;
  console.log(playlist_id);
  const { name, playlist, artist, album, time, is_favorite } = req.body;
  console.log(req.body);
  if (!name || !playlist || !artist || !album || !time) {
    res.status(422).json({
      success: false,
      message: "What are you doing? You have to complete all the fields.",
    });
  } else {
    const result = await createSongforPlaylist(req.body, playlist_id);
    res.json({ success: true, payload: result });
  }
});

songs.get("/:id", async (req, res) => {
  const { playlist_id, id } = req.params;
  const song = await getSong(playlist_id, id);
  if (song) {
    res.json({ success: true, payload: song });
  } else {
    res.redirect("/404");
  }
});

songs.delete("/:id", async (req, res) => {
  const { playlist_id, id } = req.params;
  const deletedSong = await deleteSong(playlist_id, id);
  res.json({ success: true, payload: deletedSong });
});

songs.put("/:id", async (req, res) => {
  const { playlist_id, id } = req.params;
  const { body } = req;
  const { name, playlist, artist, album, time } = body;
  if (!name || !playlist || !artist || !album || !time) {
    res.status(422).json({
      success: false,
      message: "What are you doing? You have to complete all the fields.",
    });
  } else {
    const updatedSong = await updateSong(playlist_id, id, body);
    res.json({ success: true, payload: updatedSong });
  }
});

module.exports = songs;
