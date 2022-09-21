import React, { Component } from 'react'
import Menu from '../atoms/Menu';
import Title from '../molecules/Title';
import MobileMenu from './MobileMenu';

class Navbar extends Component {
	constructor(){
		super()
		this.state = {
			title: 'My Online Portofolio',
			menus: [
				{
					menu: 'Home',
					route: '/'
				},
				{
					menu: 'About',
					route: '/about'
				},
				{
					menu: 'Experience ',
					route: '/experience'
				},
				{
					menu: 'Skills',
					route: '/skills'
				},
				{
					menu: 'Interest',
					route: '/interest'
				},
				{
					menu: 'Awards',
					route: '/awards'
				},
			],
			
		};
	}
	
	
	render() {
		return (
			<div id='navbar' className="navbar bg-base-100 absolute top-0 left-0 w-full z-10">
				<MobileMenu menus={this.state.menus}/>
				<Title title={this.state.title} />
				<Menu menus={this.state.menus} />
				<div className="navbar-end hidden xl:flex">
					<p className='text-xl font-bold pr-5'>
						Miftakhurahmat
					</p>
				</div>
			</div>
		)
	}
}


export default Navbar;