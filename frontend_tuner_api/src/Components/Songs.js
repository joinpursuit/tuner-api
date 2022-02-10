import { useEffect, useState } from "react";
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
                <table>
                    <thead>
                        <tr>
                            <th>See all songs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map(song => {
                            return <Song key={song.id} song={song} />;
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Songs;