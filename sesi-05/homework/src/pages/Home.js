import React from 'react';
import AboutMeetup from '../components/organisms/AboutMeetup';
import MeetupNow from '../components/organisms/MeetupNow';
import Members from '../components/organisms/Members';
import NextMeetup from '../components/organisms/NextMeetup';
import PastMeetups from '../components/organisms/PastMeetups';

const Home = () => {
	return (
		<div className='w-full text-white'>
			<MeetupNow />
			<NextMeetup />
			<AboutMeetup />
			<Members />
			<PastMeetups />
		</div>
	);
}

export default Home;