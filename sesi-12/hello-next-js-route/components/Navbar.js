import Link from "next/link"

const Navbar = () => {
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">Moh. Aulia Miftakhurahmat</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal p-0">
					<li>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href='/users/users-nossr'>
							<a>Users No SSR</a>
						</Link>
					</li>
					<li>
						<Link href='/users/users-ssr'>
							<a>Users SSR</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar