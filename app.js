// const cors = require("cors");
const express = require("express");
const app = express();


// middleware
app.use(cors());
app.use(express.json());

//routes

//root
app.get("/", (req, res) => {
    res.send("Welcome Tuner-API")
})


module.exports = app;