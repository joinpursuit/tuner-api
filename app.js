const express = require('express');
const cors = require('cors');
const songsController = require("./controllers/songsController");

const app = express();

app.use(cors());
app.use(express.json())


app.use("/songs", songsController);

// Home Routes
app.get('/', (_, res) => {
    res.status(200).send('Welcome to Songs');
});



// 404 PAGE
app.get("*", (_, res) => {
  res.status(404).send("Page not found");
});

// EXPORT  
module.exports = app;