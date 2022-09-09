import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Logo extends Component {
	constructor (props) {
		super(props)
	}

	render (){
		return(
			<NavLink className="btn btn-ghost normal-case text-xl p-2" to='/'>{this.props.name}</NavLink>
		)
	}
}