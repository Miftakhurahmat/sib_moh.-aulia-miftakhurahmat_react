import React from "react";
import Menu from "../atoms/Menu";

export default class Navbar extends React.Component {
	constructor(){
		super()
		this.state = {
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
				<Menu menus = {this.state.menus}/>
			</div>
		);
	}
	
}
