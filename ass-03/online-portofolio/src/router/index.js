import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Awards from '../pages/Awards'
import Contact from '../pages/Contact'
import Experience from '../pages/Experience'
import Home from '../pages/Home'
import Interest from '../pages/Interest'
import Skills from '../pages/Skills'

const Router = (props) => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />}/> 
				<Route path='/about' element={<About />}/> 
				<Route path='/experience' element={<Experience />}/> 
				<Route path='/skills' element={<Skills />}/> 
				<Route path='/interest' element={<Interest />}/> 
				<Route path='/awards' element={<Awards />}/> 
				<Route path='/contact' element={<Contact />}/> 
			</Routes>
		</div>
	)
}

export default Router