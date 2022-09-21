import { MoonIcon } from '@heroicons/react/solid'

const Navbar = () => {

	return (
		<div id='navbar' className="navbar bg-base-100 absolute top-0 left-0 w-full z-10">
			<div className="navbar-start">
				<div className="avatar">
					<div className="w-12 rounded-full">
						<img src="./img/profile-image.png" className='bg-red-900' />
					</div>
				</div>
				<a className="btn btn-ghost normal-case text-xl">My Portofolio</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal p-0">
				<li><a>Home</a></li>
				<li><a>About Me</a></li>
				<li><a>My Project</a></li>
				<li><a>Contact</a></li>
				</ul>
			</div>
			<div className="navbar-end">
				<a><MoonIcon className='h-5 w-5 text-black'/></a>
			</div>
		</div>
	)
}

export default Navbar;