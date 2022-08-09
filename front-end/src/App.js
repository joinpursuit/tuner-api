import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Index from "./Components/Index";
import NewSong from "./Components/NewSong";
import OneSong from "./Components/OneSong";
import NavBar from "./Components/NavBar";
import EditSong from "./Components/EditSong";

//Pages
import Home from "./Pages/Home";
import Error from "./Pages/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Index />} />
          <Route path="/songs/:id" element={<OneSong />} />
          <Route path="/songs/new" element={<NewSong />} />
          <Route path="/songs/edit/:id" element={<EditSong />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
