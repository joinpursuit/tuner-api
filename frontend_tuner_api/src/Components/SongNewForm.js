import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongNewForm () {
    let navigate = useNavigate();
    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    })

    const addSong =()=> {
        axios.post(`${API}/songs`, song)
        .then(() => {navigate(`/songs`)},
        (error) => console.error(error))
        .catch((c) => console.warn("catch", c));
    };
    
    const handleTextChange = (event) => {
        setSong({...song, [event.target.id]:event.target.value})
    };
    
    const handleCheckboxChange =()=> {
        setSong({...song, is_favorite: !song.is_favorite})
    };
    
    const handleSubmit =(e)=> {
        e.preventDefault();
        addSong();
    };
    
    return (
        <div className="newForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input 
                    id="name"
                    value={song.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Song"
                    required
                />
                <label htmlFor="artist">Artist: </label>
                <input 
                    id="artist"
                    value={song.artist}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Artist of Song"
                    required
                />
                <label htmlFor="album">Album: </label>
                <input 
                    id="album"
                    value={song.album}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="album of Song"
                    required
                />
                <label htmlFor="time">Duration: </label>
                <input 
                    id="time"
                    value={song.time}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Duration of Song"
                    required
                />
                <label htmlFor="is_favorite">Favorite: </label>
                <input 
                    id="is_favorite"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    cheked={song.is_favorite}
                />

                <br />
                <input type="submit" />
            </form>
        </div>
    )    
};

export default SongNewForm;

