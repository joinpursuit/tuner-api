const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createNewSong, deleteSong, updateSong, getAllSongsSorted } = require("../queries/songs.js");
const { checkName, checkArtist, checkAlbum, checkTime, checkIsFavorite } = require("../validations/checkSong.js");

songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    try {
        if(allSongs[0]){
            res.status(200).json(allSongs);
        } else {
            res.status(500).json({error: "Server Error"});
        }
    } catch (error) {
        console.log(error);
    }
});

songs.get("/", async (req, res) =>{
    // console.log(req.query.order.toUpperCase())
    const allSongsSorted = await getAllSongsSorted(order);
    // try {
    //     if(allSongsSorted[0]){
            res.status(200).json(allSongsSorted);
    //     } else {
    //         res.status(500).json({error: "Server Error"});
    //     }
    // } catch (error) {
    //     console.log(error);
    // }
});

songs.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const song = await getSong(id);
        if(song.id){
            res.status(200).json(song);
        } else {
            res.status(500).redirect("*");
        }
    } catch (error) {
        console.log(error);
    }
});

songs.post("/", checkName, checkArtist, checkAlbum, checkTime, checkIsFavorite, async (req, res) => {
    const { body } = req;

    try {
        const newSong = await createNewSong(body);
        if(newSong.id){
            res.status(200).json(newSong);
        } else {
            res.status(500).json({error: "Song creation error"});
        }
    } catch (error) {
        console.log(error);
    }
});

songs.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSong = await deleteSong(id);
        if(deletedSong.id){
            res.status(200).json(deletedSong);
        } else {
            res.status(404).json({error: "Song not found"});
        }
    } catch (error) {
        console.log(error);
    }
});

songs.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const updatedSong = await updateSong(id, body);
        if(updatedSong.id){
            res.status(200).json(updatedSong);
        } else {
            res.status(404).json({error: "Song not found"});
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = songs;