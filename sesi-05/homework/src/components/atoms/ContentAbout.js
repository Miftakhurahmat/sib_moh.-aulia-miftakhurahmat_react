import React, { Component } from "react";

export default class ContentAbout extends Component {
	constructor (props) {
		super(props)
	}

	render (){
		return(
			<div className="mx-10">
				<p>{this.props.content.message}</p>
				<br/>
				<p>Twitter: {this.props.content.twitter}</p>
			</div>
		)
		
		
	}
}