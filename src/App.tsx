import React from "react";

import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Players } from "./views/Players/Players";
import { Volumes } from "./views/Volumes/Volumes";

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/volumes">Volumes</Link>
                    </li>
                    <li>
                        <Link to="/players">Players</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/volumes" element={<Volumes/>}/>
                <Route path="/players" element={<Players/>}/>
            </Routes>
        </Router>
    );
}

export default App;
