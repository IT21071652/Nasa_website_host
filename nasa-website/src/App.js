import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ApodPage from './components/ApodPage';
import MarsRoverPage from './components/MarsRoverPage';
import EpicPage from './components/EpicPage';
import Signup from './components/Signup';
import UserManagement from './components/UserManagement';
import Login from './components/Login';
import { Navigate } from 'react-router-dom';
	

function App() {
	const user = localStorage.getItem("token");
	
	return (
		<Routes>
				{user && <Route path="/" exact element={<HomePage/>} />}

				<Route path="/Signup" exact element={<Signup/>} />
				<Route path="/Login" exact element={<Login/>} />
				<Route path="/UserManagement" exact element={<UserManagement/>} />
				<Route path="/logout" exact element={<Login/>} />


				<Route path="/Home" exact element={<HomePage/>} />
                <Route path="/apod" exact element={<ApodPage/>} />
				<Route path="/mars-rover" exact element={<MarsRoverPage/>} />
                <Route path="/epic" exact element={<EpicPage/>} />
				<Route path="/" element={<Navigate replace to="/Login" />} />



		</Routes>
	);
}

export default App;
