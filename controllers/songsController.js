const { response } = require('express');
const express = require('express');
// const db = require('../db/dbConfig');
const songs = express.Router();
const {getAllSongs, getSong, createSong, deleteSong, updateSong} = require("../queries/songs")

//INDEX
songs.get("/", async (req,res) => {
        const allSongs = await getAllSongs();
        res.json(allSongs)
    })

// CREATE
songs.post("/", async (req, res) => {
    const song = req.body
  
    try {
        const result = await createSong(song)
        if(result["id"]) {
            res.json(result)
        } else {
            console.log(`Database error: ${result}`)
            throw `Error adding ${song} to the database`
        }
    } catch (error) {
        res.status(404).json({error: "Error"})
    }
})

//SHOW
songs.get("/:id", async (req,res) => {
    const {id} = req.params
    try {
        const song = await getSong(id)
        if (song["id"]) {
            res.json(song)
        } else {
            console.log(`Database error: ${song}`);
            throw `There is no bookmark with id: ${id}`
        }
    } catch (error) {
        res.status(404).json({error: "Resource not found.", message:error})   
    }
})

//DELETE
songs.delete("/:id", async (req, res) =>{
    const {id} = req.params
    try {
        const deletedSong = await deleteSong(id)
        res.json(deletedSong)
    } catch (error) {
        console.log(error)
    }
})

 //id comes from the URL, song is the JSON req.body

songs.put("/:id", async (req, res) => {
    const {id} = req.params
    try {
        const song = await updateSong(id, req.body)
        res.json(song)
    } catch (error) {
        console.log(error)
    }
})



module.exports = songs;