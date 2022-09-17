import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutMe from '../components/AboutMe'
import Home from '../components/Home'

const Router = (props) => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />}/> 
				<Route path='/About' element={<AboutMe />}/> 
			</Routes>
		</div>
	)
}

export default Router