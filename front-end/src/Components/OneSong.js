import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function OneSong() {
  const [song, setSong] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => {
        setSong(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);
  const handleDelete = (id) => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((e) => console.log(e));
  };

  const routeEdit = () => {
    navigate(`/songs/edit/${id}`);
  };
  return (
    <Card style={{ width: "18rem" }} className="m-auto mt-5">
      <Card.Body>
        <Card.Title>{song.name} </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{song.artist}</Card.Subtitle>
        <Card.Text>
          {song.album}
          <br />
          {song.time}
          <br />
          {song.is_favorite ? <>⭐ </> : null}
        </Card.Text>
        <Button
          variant="outline-success"
          type="submit"
          className="mt-3"
          onClick={() => routeEdit(id)}
        >
          Edit
        </Button>
        <Button
          onClick={() => handleDelete(id)}
          variant="outline-danger"
          type="submit"
          className="mt-3"
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
export default OneSong;
