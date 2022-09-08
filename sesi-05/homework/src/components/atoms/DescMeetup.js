import React, { Component } from "react";

export default class DescMeetup extends Component {
	constructor (props) {
		super(props)
	}

	render (){
		return(
			<div>
				<p className="mb-2 text-lg ">Location &emsp;&emsp;{this.props.desc.location}</p>
				<p className="mb-2 text-lg">Merbers	&emsp;&emsp;{this.props.desc.members}</p>
				<p className="mb-2 text-lg">Organizers &emsp;{this.props.desc.organizers}</p>
			</div>
		)
		
		
	}
}