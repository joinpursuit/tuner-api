const express = require('express')
const songsBillboard = express.Router()
const {
  getAllSongs,
  getSong,
  createSong,
  updateSong,
  deleteSong
} = require('../queries/songs')

const validateUrl = (req, res, next) => {
  const http = 'http://'
  const https = 'https://'
  let fullUrl = req.protocol + '://' + req.get('host') + req.url

  if (fullUrl.substring(0, 7) === http || fullUrl.substring(0, 8) === https) {
    return next()
  } else {
    res
      .status(400)
      .send(
        'Sorry not found, you forgot to start your url with http:// or https://'
      )
  }
}

const validateSong = (req, res, next) => {
  const { name, artist, album, time, is_favorite } = req.body

  if (
    name === undefined ||
    typeof name !== 'string' ||
    artist === undefined || typeof artist !== 'string' ||
    album === undefined || typeof album !== 'string' ||
    time === undefined || typeof time !== 'string' ||
    is_favorite === undefined || typeof is_favorite !== 'boolean' ||
    req.body.id
  ) {
    res.status(422).json({
      success: false,
      payload: 'Bad Info!!'
    })
  } else {
    next()
  }
}

const validatePut = (req, res, next) => {
  const { name, artist, album, time, is_favorite } = req.body

  if (
    name === undefined ||
    artist === undefined ||
    album === undefined ||
    time === undefined ||
    is_favorite === undefined
  ) {
    res.status(422).json({
      success: false,
      payload: 'Bad Info!!'
    })
  } else {
    next()
  }
}

// Middleware
songsBillboard.use(validateUrl)

// Routes
songsBillboard.get('/', async (req, res) => {
  const query = req.query

  if (req.url === '/') {
    const allSongs = await getAllSongs()
    res.json(allSongs)
  } else {
    const allSongs = await getAllSongs(query)
    res.json(allSongs)
  }
})

songsBillboard.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const mySong = await getSong(id)
    if (mySong['id']) {
      res.json(mySong)
    } else {
      console.log(`Database error, ${mySong}`)
      throw `There is no song with id: ${id}`
    }
  } catch (e) {
    res.status(404).json({ error: 'Song not found.', message: e })
  }
})

// Create
songsBillboard.post('/', validateSong, async (req, res, next) => {
  try {
    const mySong = await createSong(req.body)
    if (mySong['id']) {
      res.json(mySong)
    } else {
      console.log(`Database error: ${mySong}`)
      throw `Error adding ${req.body} to the database.`
    }
  } catch (e) {
    res.status(404).json({ error: e })
  }
})

songsBillboard.put('/:id', validatePut, async (req, res) => {
  const { id } = req.params
  try {
    const updated = await updateSong(id, req.body)
    if (updated.id) {
      res.json({ success: true, payload: updated })
    }else {
        throw 'Resource not found'
    }
  } catch (e) {
    res.status(404).json({error: e})
  }
})

songsBillboard.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deleted = await deleteSong(id)
    if (deleted.id) {
      res.json({ success: true, payload: deleted })
    }else {
        throw 'Resource not found.'
    }
  } catch (e) {
    res.status(404).json({error: e})
  }
})

module.exports = songsBillboard
