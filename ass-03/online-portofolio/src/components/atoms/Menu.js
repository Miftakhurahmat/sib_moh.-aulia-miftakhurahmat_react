import React from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends React.Component {
	constructor (props) {
		super(props)
	}

	render(){
		return (
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal p-0">
					{
						this.props.menus.map((menu, i) => (
							<li key={i}>
								<NavLink end to={menu.route}>{menu.menu}</NavLink>
							</li>
						))
					}
				</ul>
			</div>
		)
	}
}

export default Menu