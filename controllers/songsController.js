const express = require('express');
const songs = express.Router();
const { getAllSongs, getSong, createSong, deleteSong, editSong } = require('../queries/songs')
const { validSong } = require('../helpers/error.js');

songs.get('/', async (req, res) => {
    const { query } = req;
    const allSongs = await getAllSongs(query);
    res.status(200).json(allSongs)
});


songs.get("/:id", async (req, res) => {
    const {id} = req.params;
    const song = await getSong(id);
    song.result ? res.redirect('/err') : res.status(200).json(song);
})


songs.post("/", async (req, res) => {
    const newPost = req.body;
    if(!validSong(newPost)) {
        res.status(200).json({ err: "Invalid song object" })
    }
    const newResult = await createSong(newPost);
    res.status(200).json(newResult)
})



songs.delete("/:id", async (req, res) => {
    const {id} = req.params;
    const deletedSong =await deleteSong(id)
    res.status(200).json(deletedSong);
    deletedSong.result ? res.redirect('/err') : res.status(200).json(deletedSong);
})


songs.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newPost = validSong(req.body);
    if(!newPost) {
        res.status(200).json({ err: "Please input a song input" });
    }
    const editedSong = await editSong(newPost, id);
    editedSong.result ? res.redirect('/err') : res.status(200).json(editedSong);
});



module.exports = songs;