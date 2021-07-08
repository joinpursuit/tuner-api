const { fetchALLSongs } = require("../queries/songs");
const songsController = require ("express").Router();


songsController.get("/",  async (req, res) => {
    const songs = await fetchALLSongs()
    res.json(songs)
})

module.exports = songsController