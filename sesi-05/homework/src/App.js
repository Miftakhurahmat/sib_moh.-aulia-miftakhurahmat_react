import React from 'react'
import Navbar from './components/organisms/Navbar'
import Router from './router'
import Footer from './components/organisms/Footer'

export default function App(props) {
	return (
		<div className='bg-blue-900'>
			<Navbar />
			<Router />
			<Footer />
		</div>
	)
}
