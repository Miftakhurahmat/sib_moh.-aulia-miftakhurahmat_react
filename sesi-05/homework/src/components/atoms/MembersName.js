import React, { Component } from "react";

export class MembersName extends Component {
	constructor (props) {
		super(props)
	}

	render (){
		return(
			<p className="font-medium">{this.props.name.name} &emsp; <span>{this.props.name.otherMembers} Others.</span></p>
		)
	}
}