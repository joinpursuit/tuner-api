const express = require("express");

const songs = express.Router()
const {getAllSongs, getASong, createSong, deleteSong, updateSong} = require('../queries/songs')

songs.get('/', async (_, response) =>{
const songs = await getAllSongs();
response.send(songs)
})

songs.get("/:id", async (request, response) => {
    const aSong = await getASong(request.params.id);
    response.status(200).json(aSong);
  }); 

  songs.post("/", async (request, response) => {
    console.log("GET request to /post");
    const newSong = await createSong(request.body)
    response.status(200).json(newSong)
  })

  songs.delete("/:id", async (request, response) => {
    console.log("GET request to /delete");
    const deletedSong = await deleteSong(request.params.id);
    if (deletedSong.id) {
      response.status(200).json(deletedSong);
    } else {
      response.status(404).json("Song not found!");
    }
  });
  
  //UPDATE
  songs.put("/:id", async (request, response) => {
    try {
      const updatedSong = await updateSong(
        request.params.id,
        request.body
      );
      response.status(200).json(updatedSong);
    } catch (error) {
      console.log(error)
      response.status(404).json({ error: "Song not found" });
    }
  });



module.exports=songs



