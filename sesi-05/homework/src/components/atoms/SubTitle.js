import React, { Component } from "react";

export default class SubTitle extends Component {
	constructor (props) {
		super(props)
	}

	render (){
		return(
			<h2 className="font-semibold text-xl m-3 flex-1">{this.props.subtitle}</h2>
		)
		
		
	}
}