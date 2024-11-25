import React from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "@/pages/Home.jsx";
import Tips from "@/pages/Tips.jsx";

import './styles/main.css';

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
