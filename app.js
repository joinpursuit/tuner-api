const cors = require("cors")
const express = require("express")
const songsControllers = require("./controllers/songsControllers")
const videoControllers = require("./controllers/videoControllers")

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Welcome to Tuner")
})
// app.get('/vid',(req, res)=>{
//     res.send("Welcome to Video")
// })

app.use("/songs", songsControllers);
// app.use("/video", videoControllers);

app.get("*", (req, res)=>{
    res.status(404).send("Page not Found");
});

module.exports = app;