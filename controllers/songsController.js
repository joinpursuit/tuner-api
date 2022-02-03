
const express = require("express");
const res = require("express/lib/response");

const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updatedSong,
} = require("../queries/songs");

const songs = express.Router();

    songs.get("/", async (_, response) => {
    console.log("GET request to /songs");
    const allSongs = await getAllSongs();
    if (allSongs.length === 0) {
        response.status(500).json({ error: "server error" });
    return;
    }
    response.status(200).json(allSongs);
    });

    songs.get("/:id", async (request, response) => {
    console.log("GET request to /Songs/:id");
    const song = await getSong(request.params.id);
    response.status(200).json(song);
    });

    songs.post("/", async (request, response) => {
    const song = await createSong(request.body);
    response.status(200).json(song);
    });

    songs.delete('/:id', async (request, response) => {
        const deletedSong = await deleteSong(req.params.id);
        if(allSongs.length === 0) {
            response.status(200).json(deletedSong);
            // response.status(500).json({error: 'server error' });
        } else {
            response.status(404).json('Song does not exist');
        }
    })

    songs.put('/:id', async (req, res) => {
        const updatedSong = await updateSong(req.params.id, req.body);
        if(updatedSong.id) {
            res.status(200).json(updatedSong);
        } else {
            res.status(404).json('Song does not exist');
        };

})


module.exports = songs;


// const express = require("express");
// const cors = require("cors");
// const songsController = require("./controllers/songsController");

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/songs", songsController);

// app.get("/", (_, response) => {
//   console.log("GET request to /");
//   response.send("Hello and welcome to songs!");
// });

// app.get("*", (_, response) => {
//   response.status(404).json({ error: "Page not found" });
// });

// module.exports = app;
