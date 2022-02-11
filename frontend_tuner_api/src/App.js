import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/songs" element={<Index />}/>
        <Route path="/songs/new" element={<New />}/>
        <Route exact path="/songs/:id" element={<Show />}/>
        <Route path="/songs/:id/edit" element={<Edit />}/>
        <Route path="*" element={<FourOFour />}/>
      </Routes>
    </Router>
  );
}

export default App;
