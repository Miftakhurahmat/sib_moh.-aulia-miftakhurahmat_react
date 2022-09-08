import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../atoms/Logo";
import Menu from "../atoms/Menu";

export default class Navbar extends React.Component {
	constructor(){
		super()
		this.state = {
			name: 'Qtemu',
			menus: [
				{
					menu: 'Create Meetup',
					link: '/CreateMeetup',
				},
				{
					menu: 'Explore',
					link: '/Explore'
				}
			],
			
		};
	}
	render() {
		return (
			<div className="navbar bg-primary">
				<Logo name = {this.state.name}/>
				<Menu menus = {this.state.menus}/>
				
			</div>
		);
	}
	
}
