import React from "react";
import Copyrigtht from "../atoms/Copyright";

export default class MeetupNow extends React.Component {
	constructor(){
		super()
		this.state = {
			name: `Hacktiv8`,
			year: `2018`,
		};
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