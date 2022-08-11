import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
let API = process.env.REACT_APP_API_URL

function SongsDetails() {
  const [songs, setSongs] = useState([])
  const { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => {
        setSongs(res.data)
        navigate(`/songs/${id}`)
      })
      .catch(() => {
        navigate('/not-found')
      })
  }, [id, navigate])

  const handleDelete = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate('/songs')
      })
      .catch((err) => {
        console.warn(err)
      })
  }

  return (
    <article className='song-detail'>
      <p>Song Name: {songs.name}</p>
      <p>Artist:{songs.artist}</p>
      <p>Time:{songs.time}</p>
      <p>Favorite: {songs.is_favorite ? <span>⭐</span> : <span>❌</span>}</p>
      <div className='showNavigation'>
        <Link to={`/songs`}>
          <button className='button'>Back</button>
        </Link>{' '}
        <Link to={`/songs/${id}/edit`}>
          <button className='button'>Edit</button>
        </Link>{' '}
        <button onClick={handleDelete} className='delete'>
          Delete
        </button>
      </div>
    </article>
  )
}

export default SongsDetails
