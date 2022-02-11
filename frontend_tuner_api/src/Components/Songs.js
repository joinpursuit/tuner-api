import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";
import axios from "axios";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

function Songs () {
    const [songs, setSongs] = useState([]);

    useEffect(()=>{
        axios.get(`${API}/songs`)
            .then(res => setSongs(res.data))
            .catch(err => console.log(err));
    },[])
    return (
        <div className="Songs">
            <section>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <td>Favorite</td>
                            <td>Name</td>
                            <td>Artist</td>
                            <td>Ablum</td>
                            <td>Duration</td>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map(song => {
                            return <Song key={song.id} song={song} />;
                        })}
                    </tbody>
                </Table>
            </section>
        </div>
    )
}

export default Songs;