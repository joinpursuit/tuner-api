import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const API = process.env.REACT_APP_API_URL

function SongEditForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [songs, setSongs] = useState({
    name: '',
    artist: '',
    album: '',
    is_favorite: false,
    time: '',
  })

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => {
        setSongs(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  const handleTextChange = (event) => {
    setSongs({ ...songs, [event.target.id]: event.target.value })
  }

  const handleCheckboxChange = () => {
    setSongs({ ...songs, is_favorite: !songs.is_favorite })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(`${API}/songs/${id}`)
    axios
      .put(`${API}/songs/${id}`, songs)
      .then(() => {
        navigate(`/songs/${id}`)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Song Name:</Form.Label>
        <br />
        <Form.Control
          id='name'
          type='text'
          name='name'
          value={songs.name}
          onChange={handleTextChange}
          required
        />
        <br />
        <br />
      </Form.Group>
      <Form.Group>
        <Form.Label>Artist</Form.Label>
        <br />
        <Form.Control
          id='artist'
          name='artist'
          type='text'
          value={songs.artist}
          onChange={handleTextChange}
          required
        />
        <br />
        <br />
      </Form.Group>
      <Form.Group>
        <Form.Label>Album</Form.Label>
        <br />
        <Form.Control
          type='text'
          id='album'
          name='album'
          value={songs.album}
          onChange={handleTextChange}
          required
        />
        <br />
        <br />
      </Form.Group>
      <Form.Group>
        <Form.Label>Time</Form.Label>
        <br />
        <Form.Control
          type='text'
          name='time'
          id='time'
          value={songs.time}
          onChange={handleTextChange}
          required
        />
      </Form.Group>
      <br />
      <br />
      <Form.Group>
        <Form.Label>Favorite</Form.Label>
        <br />
        <Form.Check
          type='checkbox'
          id='is_favorite'
          name='is_favorite'
          onChange={handleCheckboxChange}
          checked={songs.is_favorite}
        />
      </Form.Group>
      <br />
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default SongEditForm
