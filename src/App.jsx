import React from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';

import './styles/main.css';
import Home from "@/pages/Home.jsx";
import Tips from "@/pages/Tips.jsx";

const App = () => {
    return (
        <div className="App">
            <div className="App-header container">
                <Router>
                    <Routes>
                        <Route path={'/'} element={<Home/>}></Route>
                        <Route path={'/tips'} element={<Tips/>}></Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
};

export default App;
