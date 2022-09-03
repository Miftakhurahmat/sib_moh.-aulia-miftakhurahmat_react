import React from 'react';
import './App.css';

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

function Navbar() {
	return (
		<div className="navbar bg-[#828282]">
			<div className="flex-none">
				<a className="btn btn-ghost normal-case text-xl text-white" href='#'>QTemu</a>
			</div>
			<div className="flex-1">
				<ul className="menu menu-horizontal p-0 text-slate-400">
					<li><a href='#'>Create Meetup</a></li>
					<li><a href='#'>Explore</a></li>
				</ul>
			</div>
			<div className="navbar-end mx-2 text-slate-400">
				<a href='#'>login</a>
			</div>
		</div>
	);
}

function MeetupNow() {
	return (
		<div className="flex bg-[#C4C4C4] m-3">
			<div id='img-main' className="bg-[#BDBDBD] h-48 w-48 m-5"></div>
			<div id='meetup-desc' className="m-5">
				<h1 id='title-meetup-main' className=" text-2xl font-bold mb-2">Hacktiv8 Meetup</h1>
				<p className="mb-2 text-lg ">Location &emsp;&emsp;Jakarta,Indonesia</p>
				<p className="mb-2 text-lg">Merbers	&emsp;&emsp;1,078</p>
				<p className="mb-2 text-lg">Organizers &emsp;	Adhy Wiranata</p>
				<button class="btn bg-[#4F4F4F] rounded-none w-36">Join Us</button>
			</div>
		</div>
	)
}

function NextMeetup() {
	return (
		<div>
			<h2 className="font-semibold text-xl m-3">Next Meetup</h2>
			<div className="font-semibold mx-10 bg-[#C4C4C4] p-4">
				<h4>Awesome meetup and event</h4>
				<p className="text-slate-400">25 January 2019</p><br/>
				<p>
					Hello, JavaScript & Node.js Ninjas! <br/>
					Get ready for our montly meetup JakartaJs! This will be our fifth meetup of 2018! <br/>
					The meetup format will contain some short stories and technical talks. <br/>
					If you have a short announscement you'd like to share with the audience, you may do so during open miv announcements.<br/><br/>
					Remember to brimng a photo ID to get through building security.<br/><br/>
					.....<br/><br/>
					See you there!<br/><br/>
					Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJs Organizers
				</p>
			</div>
		</div>
	)
}

function AboutMeetup() {
	return (
		<div>
			<h2 className="font-semibold text-xl m-3">About Meetup</h2>
			<div className="mx-10">
				<p>Come and meet other developers in teh JavaScript and it's library in the Greater Jakarta area</p>
				<br/>
				<p>Twitter: @JakartaJs and we use the hashtag #jakartajs</p>
			</div>
		</div>
		
	)
}

function Members() {
	return(
		<div>
			<div className="flex m-3">
				<h2 className="font-semibold text-xl flex-1">Members</h2>
				<p className="mr-10">See all</p>
			</div>
			<div className="bg-[#C4C4C4] mx-10 flex">
				<div className="profile-img bg-[#828282] h-16 w-16 m-5 rounded-full"></div>
				<div className="member-desc my-5">
					<h3 className="role text-lg font-medium">Organizers</h3>
					<p className="font-medium">Ardi Wiranata &emsp; <span>4 Others.</span></p>
				</div>
			</div>
		</div>
	)
}

function PastMeetups() {
	const meetups = [
		{
			"id" : 1,
			"date" : "27 November 2017",
			"title" : "#39 JakartaJS April Meetups with kumparan",
			"members" : 139
		},
		{
			"id" : 2,
			"date" : "27 October 2017",
			"title" : "#39 JakartaJS April Meetups with BliBli",
			"members" : 113
		},
		{
			"id" : 1,
			"date" : "27 September 2017",
			"title" : "#39 JakartaJS April Meetups with Hactiv8",
			"members" : 110
		}
	];
	const listMeetup = meetups.map((itemMeetup) =>
	<div class="card w-96 xl:w-1/3 bg-[#C4C4C4] shadow-xl rounded-none mx-5">
		<div class="card-body p-5">
			<h2 class="card-title">{itemMeetup.date}</h2>
			<hr />
			<p>{itemMeetup.title}</p>
			<p>{itemMeetup.members} <span className="font-light">went</span></p>
				<div class="card-actions justify-start">
					<button class="btn rounded-none w-24 bg-[#828282] text-slate-200">view</button>
				</div>
		</div>
	</div>
	);

	return (
		<div>
			<div className="flex m-3">
				<h2 className="font-semibold text-xl flex-1">Past Meetups</h2>
				<p className="mr-10">See all</p>
			</div>
			<div className="mx-5 flex">
				{listMeetup}
			</div>
		</div>
	)
}

function Footer() {
	return(
		<footer>
			<br/><br/>
			<hr className="mx-10"/>
			<br/><br/>
			<div className="flex">
				<h2 className="mx-auto">Copyright Hactiv8 2018</h2>
			</div>
			<br/><br/>
		</footer>
	)
}
export default App;
