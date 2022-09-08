import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Logo extends Component {
	constructor (props) {
		super(props)
	}

	render (){
		return(
			<div className="flex-none">
				<NavLink className="btn btn-ghost normal-case text-xl text-white" to='/'>{this.props.name}</NavLink>
			</div>
		)
		
		
	}
}