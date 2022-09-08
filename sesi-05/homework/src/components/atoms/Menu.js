import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Menu extends Component {
	constructor (props) {
		super(props)
	}

	render (){
		return(
			<div className="flex-1">
				<ul className="menu menu-horizontal p-0 text-slate-400 w-full">
					{this.props.menus.map((menu, i) => (
						<li key={i}><NavLink to={menu.link} className='btn btn-ghost normal-case'>{menu.menu}</NavLink></li>
					))}
					<li className="navbar-end ml-96">
						<NavLink className="btn btn-ghost normal-case" to='/Login'>login</NavLink>
					</li>
				</ul>
			</div>
		)
	}
}