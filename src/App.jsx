import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "@/pages/Home.jsx";
import Tips from "@/pages/Tips.jsx";
import Shop from "@/pages/Shop.jsx";

import './styles/main.css';

const App = () => {
	return (
			<div className="App">
				<div className="App-header container">
					<BrowserRouter>
						<Routes>
							<Route path={'/'} element={<Home/>}></Route>
							<Route path={'/tips'} element={<Tips/>}></Route>
							<Route path={'/shop'} element={<Shop/>}></Route>
						</Routes>
					</BrowserRouter>
				</div>
			</div>
	);
};

export default App;
