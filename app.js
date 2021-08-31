const express = require("express")
const cors = require("cors")
const songsControllers = require("./controllers/songsControllers")
const videoControllers = require("./controllers/videoControllers")
const lyricControllers = require("./controllers/lyricControllers")
const albumsControllers = require("./controllers/albumsControllers")

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Welcome to Tuner")
})


app.use("/songs", songsControllers);
app.use("/videos", videoControllers);
app.use("/lyrics", lyricControllers);
app.use("/Albums", albumsControllers);

app.get("*", (req, res)=>{
    res.status(404).send("Page not Found");
});

module.exports = app;