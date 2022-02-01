import express from "express"
import getAllSongs from "../query/songs.js"
const songs = express.Router()


songs.get('/', async (request, response) => {
    console.log("GET /songs")
    const songs = await getAllSongs()
    response.status(200).json(songs)
})

songs.get('/:index', (request, response) => {
    const {index} = request.params
    response.send(index)
})




export default songs