import React, { Component } from "react";

export class RoleMembers extends Component {
	constructor (props) {
		super(props)
	}

	render (){
		return(
			<h3 className="role text-lg font-medium">{this.props.role}</h3>
		)
	}
}