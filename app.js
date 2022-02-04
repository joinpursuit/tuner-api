const express = require("express");
const app = express();
const cors = require("cors");
const songsControllers = require("./controllers/songsControllers");

app.use(cors());
app.use(express.json());

app.get("/", (_, response) => {
    console.log("GET request to /")
    response.send("Welcome to Tuner!");
});

app.use("/songs", songsControllers);

app.get("*", (_, response) => {
    response.status(404).json({error: "Page not found"})
});

module.exports = app;