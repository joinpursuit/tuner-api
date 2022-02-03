const express = require("express");
const songs = express.Router();

const {getAllSongs, getSong, createSong, deleteSong, updateSong} = require("../queries/songs");


// INDEX
songs.get("/", async (request, response) => {
    const allSongs = await getAllSongs();
    // console.log(allSongs)
    if (allSongs[0]) {
      response.status(200).json(allSongs);
    } else {
      response.status(500).json({ error: "database could not be found" });
    }
  });


songs.get("/:id", async (request,response) =>{
    const{id} = request.params;
    const song = await getSong(id);
    if (song){
        response.status(200).json(song);
    } else{
        response.status(404).json({error: "no song found"});
    }
});

songs.post("/", async (request,response) =>{
    try{
        const newSong = await createSong(request.body);
        response.status(200).json(newSong)
    } catch (error) {
        response.status(200).json({ error: error });
    }
 });

 songs.delete("/:id", async (request, response) => {
    const { id } = request.params;
    const deletedSong = await deleteSong(id);

    if (deletedSong.id) {
      response.status(200).json(deletedSong);
    } else {
      res.status(404).json("Song not found");
    }
  }); 

  songs.put("/:id",async (request,response) =>{
    const updatedSong = await updateSong(request.params.id, request.body);

    if(updatedSong.id){
      response.status(200).json(updatedSong);
    }else {
      response.status(404).json("song does not exist");
    }
  })

module.exports = songs;