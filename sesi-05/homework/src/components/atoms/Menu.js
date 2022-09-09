import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo"

export default class Menu extends Component {
	constructor (props) {
		super(props)
		this.state = {
			name: 'Qtemu',			
		};
	}

	render (){
		return(
			<div className="flex-1">
				<ul className="menu menu-horizontal p-0 text-slate-400 w-full">
					<li>
						<Logo name ={this.state.name}/>
					</li>
					{this.props.menus.map((menu, i) => (
						<li key={i}><NavLink to={menu.link} className='btn btn-ghost normal-case mx-3 lg:mx-3 xl:mx-0'>{menu.menu}</NavLink></li>
					))}
					<li className="navbar-end mx-3 md:ml-60 lg:ml-96">
						<NavLink className="btn btn-ghost normal-case" to='/Login'>login</NavLink>
					</li>
				</ul>
			</div>
		)
	}
}