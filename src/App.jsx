import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home.jsx";
import Tips from "@/pages/Tips.jsx";
import Shop from "@/pages/Shop.jsx";

import './styles/main.css';

const App = () => {
	return (
			<div className="App">
				<div className="App-header container">
					<Router>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/tips" element={<Tips />} />
							<Route path="/shop" element={<Shop />} />
						</Routes>
					</Router>
				</div>
			</div>
	);
};

export default App;
