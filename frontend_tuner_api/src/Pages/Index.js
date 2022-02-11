import { Link } from "react-router-dom";
import Songs from "../Components/Songs";

function Index() {
    return (
        <div className="Index">
            <h1>Index</h1>
            <button className="new-song"><Link to="/songs/new">New Song</Link></button>
            <Songs />
        </div>
    )
};

export default Index;