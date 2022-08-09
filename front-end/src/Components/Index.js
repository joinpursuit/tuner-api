import axios from "axios";
import { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
const API = process.env.REACT_APP_API_URL;

function Index() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((res) => {
        setSongs(res.data);
      })
      .catch((e) => console.log("History call error", e));
  }, []);
  return (
    <Container className="mt-4">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Fav</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, idx) => {
            return (
              <tr key={idx}>
                <td>{song.is_favorite ? <div>⭐ </div> : null}</td>
                <td>{song.name}</td>
                <td>{song.artist}</td>
                <td>{song.time}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Index;
