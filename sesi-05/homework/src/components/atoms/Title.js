import React, { Component } from "react";

export default class Title extends Component {
	constructor (props) {
		super(props)
	}

	render (){
		return(
			<h1 id='title-meetup-main' className=" text-2xl font-bold mb-2">{this.props.title}</h1>
		)
		
		
	}
}