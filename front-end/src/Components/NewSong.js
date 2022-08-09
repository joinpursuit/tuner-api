import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
const API = process.env.REACT_APP_API_URL;

function NewSong() {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };
  const handleCheck = (e) => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/songs/new`, song)
      .then(() => {
        navigate(`/songs/`);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div style={{ display: "block", padding: 30, color: "white" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label> Favorite</Form.Label>
          <Form.Check
            type="checkbox"
            id="is_favorite"
            checked={song.is_favorite}
            onChange={handleCheck}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            value={song.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Artist</Form.Label>
          <Form.Control
            type="text"
            id="artist"
            name="artist"
            value={song.artist}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Album</Form.Label>
          <Form.Control
            type="text"
            id="album"
            name="album"
            value={song.album}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="text"
            id="time"
            name="time"
            value={song.time}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="outline-success" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default NewSong;
