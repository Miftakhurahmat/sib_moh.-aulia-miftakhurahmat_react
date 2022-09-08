import React from 'react'
import { Route, Routes} from "react-router-dom";
import Home from '../pages/Home';
import CreateMeetup from '../pages/CreateMeetup';
import Explore from '../pages/Explore';
import Login from '../pages/Login';

export default function Router(props) {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} /> 
				<Route path="/CreateMeetup" element={<CreateMeetup />} /> 
				<Route path="/Explore" element={<Explore />} /> 
				<Route path="/Login" element={<Login />} /> 
			</Routes>
		</>
	)
}