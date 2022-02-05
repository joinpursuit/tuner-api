const express = require('express');
const cors = require('cors')
// CONFIGURATION
const app = express();

const songsController = require('./controllers/songsController')


// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

app.use('/songs', songsController)

app.get('/', (_, response) =>{
    response.send('Welcome to Tuner')
})

// 404 PAGE
app.get('*', (_, response) =>{
    response.status(404).send({error:'Page not found!'})
})


module.exports= app