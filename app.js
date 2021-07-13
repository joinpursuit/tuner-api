const cors = require("cors")
const express = require("express")
const songsController = require("./controllers/songsController")


const app = express()


app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Welcome to Music playlist App")
})

//think about it as an endpoint
app.use("/songs", songsController)

app.get("*", (req,res) => {
    res.status(404).send("Page NOT Found")
})
module.exports = app;