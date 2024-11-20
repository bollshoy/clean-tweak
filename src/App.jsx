import React from 'react';
import {HashRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home.jsx";

import './styles/main.css';

const App = () => {

    return (
        <div className="App">
            <div className="App-header container">
                <Router>
                    <Routes>
                        <Route path={'/'} element={<Home/>}></Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
};

export default App;