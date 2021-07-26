const {
  fetchALLSongs,
  getSong,
  createSong,
  updateSong,
  deleteSong,
} = require("../queries/songs");
const songsController = require("express").Router({
  mergeParams: true,
});
// const playlists = require('./playlistsController')
// songsController.use('/:song_id/playlists', playlists)

songsController.get("/", async (req, res) => {
  const songs = await fetchALLSongs(req.params.playlist_id);
  res.json(songs);
});

songsController.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  res.json(song);
});

songsController.post("/", async (req, res) => {
  const newSong = await createSong(req.body);
  res.json(newSong);
  console.log(newSong);
});

songsController.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { name, category, url } = body;

  if (!name || !category || !url) {
    res.status(422).json({
      error: true,
      success: false,
      message: "Missing information",
    });
  } else {
    const editedSong = await updateSong(params.id, body);
    res.json(editedSong);
  }
});

songsController.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedSong = await deleteSong(id);
  res.json({
    success: true,
    payload: deletedSong,
  });
});

module.exports = songsController;
