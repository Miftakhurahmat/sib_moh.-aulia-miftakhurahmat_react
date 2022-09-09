import React from "react";
import Copyrigtht from "../atoms/Copyright";
import PropTypes from 'prop-types';

export default class Footer extends React.Component {
	constructor(){
		super()
		this.state = {
			name: `Hacktiv8`,
			year: 2018,
		};
		Footer.propTypes = {
			name: PropTypes.string,
			year: PropTypes.number,
		}
	}
	render() {
		return (
		<footer>
			<Copyrigtht name = {this.state}/>
		</footer>
		)
	}
	
}


// function Footer() {
// 	return(

// 	)
// }

// export default Footer;