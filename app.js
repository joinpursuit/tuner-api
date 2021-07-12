// *Dependencies
const express = require("express");
// const cors = require("cors");

// * Configuration
const app = express();

// * Middleware
// app.use(cors());
app.use(express.json());


module.exports = app;
