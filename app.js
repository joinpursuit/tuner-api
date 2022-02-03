const express = require('express');
const cors = require('cors')
const app = express();
// const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

const songsController = require('./controllers/songsController')
app.use('/song', songsController)

app.get('/', (req, res) => {
    res.status(200).send('Welcome to Turner!')
});

app.get('*', (req, res) => {
    res.status(404).send("this is not the page you are looking for")
})

module.exports = app;
