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

export default MeetupNow;