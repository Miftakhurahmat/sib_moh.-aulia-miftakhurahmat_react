import React from "react";
import propTypes from 'prop-types';

class HeroName extends React.Component {
	render(){
		return (
			<>
				<h3>Hero Name</h3>
				<p>{this.props.name}</p>
			</>
		)
	}
}

// penggunaan proptypes
HeroName.propTypes = {
	name: propTypes.string
}

// step one
// class Hero extends React.Component {
// 	render() {
// 		return (
// 			<>
// 				<HeroName name='hercules' />
// 			</>
// 		)
// 	}
// }

class Hero extends React.Component {
	constructor(){
		super()
		this.state = {
			name: 'Gatot Kaca'
		}
	}

	render() {
		return (
			<>
				<p>Step one </p>
				<HeroName name='hercules' />
				<hr></hr>
				<p>Step two using state</p>
				<HeroName name={this.state.name} />
			</>
		)
	}
}

export default Hero;