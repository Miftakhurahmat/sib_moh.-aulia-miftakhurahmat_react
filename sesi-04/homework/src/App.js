import React from 'react';
import './App.css';
import AboutMeetup from './components/AboutMeetup';
import Footer from './components/Footer';
import MeetupNow from './components/MeetupNow';
import Members from './components/Members';
import Navbar from './components/Navbar';
import NextMeetup from './components/NextMeetup';
import PastMeetups from './components/PastMeetups';

const App = () => {
	return (
		<div className='w-full bg-white text-black'>
			<Navbar />
			<MeetupNow />
			<NextMeetup />
			<AboutMeetup />
			<Members />
			<PastMeetups />
			<Footer />
		</div>
	);
}

export default App;
