const express = require('express');
const app = express ()

const cors = require('cors')

const songsController = require('./controllers/songsController')

app.use('/songs', songsController)


app.get('/', (request, response) =>{
    response.send('Welcome to Tuner')
})

app.get('*', (request, response) =>{
    response.status(404).send({error:'Page not found!'})
})


module.exports= app