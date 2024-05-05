import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ApodPage from './components/ApodPage';
import MarsRoverPage from './components/MarsRoverPage';
import EpicPage from './components/EpicPage';

import { Navigate } from 'react-router-dom';
	

function App() {
	const user = localStorage.getItem("token");
	
	return (
		<Routes>
				{<Route path="/" exact element={<HomePage/>} />}

				<Route path="/Home" exact element={<HomePage/>} />
                <Route path="/apod" exact element={<ApodPage/>} />
				<Route path="/mars-rover" exact element={<MarsRoverPage/>} />
                <Route path="/epic" exact element={<EpicPage/>} />
				<Route path="/logout" exact element={<HomePage/>} />
				<Route path="/" element={<Navigate replace to="/Home" />} />



		</Routes>
	);
}

export default App;
