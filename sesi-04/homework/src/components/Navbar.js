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

export default Navbar;