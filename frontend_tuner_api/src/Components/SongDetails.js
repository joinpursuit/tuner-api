import { useEffect, useState } from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SongDetails () {
    const [song, setSong] = useState({});
    const {id} = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${API}/songs/${id}`)
        .then(res => setSong(res.data))
        .catch(err => console.log(err));
    },[id])

    const handleDelete =()=> {
        axios.delete(`${API}/songs/${id}`)
        .then(res => navigate("/songs"))
        .catch(err => console.log(err));
    }

    return (
        <article>
            <h2>Song: {song.name}</h2>
            <h3>Artist: {song.artist}</h3>
            <h3>Album: {song.album}</h3>
            <h3>Duration: {song.time}</h3>
            <div className="navigation">
                <div>
                    <Link to={`/songs`}><button>Back</button></Link>
                </div>
                <div>
                    <Link to={`/songs/${id}/edit`}><button>Edit</button></Link>
                </div>
                <div>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </article>
    )
}

export default SongDetails;
