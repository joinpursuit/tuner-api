const { response } = require("express");
const e = require("express");
const express= require("express");
const { redirect } = require("express/lib/response");
const songsRouter = express.Router()
const {getAllSongs, getOneSong, addNewSong, deletedSong, updateSong} = require("../queries/songs")

songsRouter.get("/", async (_, response) => {
    
    const songs = await getAllSongs();

    if (songs.length === 0) {
        response.status(500).json({error: "Server Error"})
    } else {
        response.status(200).json(songs)
    }

})

songsRouter.get("/:id", async (request, response) => {

    const {id} = request.params
    const song = await getOneSong(id);
    if (song.id) {
        console.log("Get songs/:id")
        response.status(200).json(song)
    }else {
        response.redirect("/redirect")
    }
})

//Create
//Maybe add a validator 
songsRouter.post("/", async (request, response) => {

    const newSong = request.body;
    console.log(newSong)
    const song = await addNewSong(newSong);
    console.log(`Create new song`)
    response.status(201).json(song);
})

//Delete
songsRouter.delete("/:id", async (request, response) => {

    const {id} = request.params
    const song = await deletedSong(id)
    if (song.id) {
        console.log(`Successfully deleted ${song}`)
        response.status(200).json(song)
    } else {
        response.redirect("/redirect")
    }
})

//Update
songsRouter.put("/:id" , async (request, response) => {

    const {id} = request.params
    const updatedSong = request.body
    const song = await updateSong(id, updatedSong)
    
    if (song.id) {
        response.status(200).json(song)
    }else {
        response.redirect("/redirect")
    }
    
})



module.exports = songsRouter;