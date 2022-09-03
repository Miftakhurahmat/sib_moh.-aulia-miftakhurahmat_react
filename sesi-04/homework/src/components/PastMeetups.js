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
			"title" : "#38 JakartaJS April Meetups with BliBli",
			"members" : 113
		},
		{
			"id" : 1,
			"date" : "27 September 2017",
			"title" : "#37 JakartaJS April Meetups with Hactiv8",
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

export default PastMeetups;