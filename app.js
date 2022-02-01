const express = require("express");
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

module.exports = app;
