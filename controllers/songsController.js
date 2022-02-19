
// const { response } = require("express");
const express = require("express");
// const res = require("express/lib/response");
const songs = express.Router();


const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");


    // GET the song object
    songs.get("/", async (_, response) => {
        const allSongs = await getAllSongs();
        if (allSongs.length === 0) {
            response.status(500).json({ error: "server error" });
        return;
        } else {
            console.log("GET request to /songs");
            response.status(200).json(allSongs);
            }
    });

    // GET a song 
    songs.get("/:id", async (request, response) => {
        const { id } = request.params;
        const song = await getSong(id);
        if (song.id) {
            console.log("GET request to /Songs/:id");
            response.status(200).json(song);
        }
            response.redirect('/redirect')
    });

    // POST create a new song
    songs.post("/", async (request, response) => {
        const song = await createSong(request.body);
       if (!createSong) {
           response.status(500).json({error: 'Song not posted'});
       } else {
        response.status(200).json(song);
       }
    });

    // PUT request = UPDATE post 
    songs.put('/:id', async (_, res) => {
        const { id } = params.body;
        const updatedSong = request.body;
        
        const song = await updateSong(id,updatedSong);
        if (song.id){
            console.log('UPDATE /:id')
            console.log(song)
            res.status(200).json(song);
        } else {
            response.redirect('/redirect')
            // res.status(404).json('Song does not exist');
        };
        // -- OR --
//         songs.put("/:id", async (request, response) => {
//             const updatedSong = await updateSong(request.params.id, request.body);
//             if (updatedSong) {
//               response.status(200).json(updatedSong);
//             } else {
//               response.status(500).json({ error: "Song could not be updated" });
//             }
//           });

        // DELETE
        songs.delete('/:id', async (request, response) => {
            const { id } = request.params; 
            const deletedSong = await deleteSong(id);
            if(deletedSong.id) {
                console.log(deletedSong)
                console.log('DELETE request to /:id')
                response.status(200).json(deletedSong);
            } 
                response.status(404).json('Song does not exist')
        })
})


module.exports = songs;


