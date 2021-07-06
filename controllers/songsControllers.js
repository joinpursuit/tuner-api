const express = require("express");
const songs = express.Router();
const { getAllSongs, getSongs, newSongs } = require("../quries/songs");

songs.get("/", async (req, res)=>{
    const allSongs = await getAllSongs();
    res.json(allSongs);
})

songs.get("/:id", async (req,res)=>{
    const { id} = req.params
    try {
        const oneSong = getSongs(id)
        if(oneSong["id"]){
            res.json(oneSong)
        }else{
            throw id
        }
    } catch (error) {
        res.status(404).json({error: "Id not found", message: `This i an ${error}` })
    }
})
songs.post("/", async (req,res)=>{
    try {
        const createSongs =newSongs(req.body)
        if(createSongs["id"]){
            res.json(createSongs)
        }else{
            throw req.body
        }
    } catch (error) {
        res.status(404).json({error: "No new information has been add to DB ", message: `This post has end in a error ${error}` })
    }
})

module.exports = songs;