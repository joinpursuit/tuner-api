import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar () {
    return (
        <nav className="nav">
            <h1><Link to="/songs">Tuner</Link></h1>
            <div id="music-sign"><Link to="/">🎶🎶🎶</Link></div>
        </nav>
    )
}