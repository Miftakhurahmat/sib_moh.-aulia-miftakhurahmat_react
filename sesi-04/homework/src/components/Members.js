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

export default Members;