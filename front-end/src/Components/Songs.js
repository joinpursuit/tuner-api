import { useEffect, useState } from 'react'
import Song from './Song'
import axios from 'axios'
const API = process.env.REACT_APP_API_URL

function Songs() {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    axios.get(`${API}/songs/`).then((res) => {
      setSongs(res.data)
    })
  }, [])

  return (
    <div>
      <thead>
        <tr>
          <th></th>
          <th>Song Name</th>
          <th>Artist</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song, id) => {
          return <Song key={song.id} song={song} index={id} />
        })}
      </tbody>
    </div>
  )
}

export default Songs
