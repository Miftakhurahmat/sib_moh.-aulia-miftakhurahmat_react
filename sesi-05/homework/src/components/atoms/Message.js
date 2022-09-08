import React, { Component } from "react";

export class Message extends Component {
	constructor (props) {
		super(props)
	}

	render (){
		return(
			<div className="font-semibold mx-10 bg-primary p-4">
				<h4>{this.props.state.letterTitle}</h4>
				<p className="text-slate-400">{this.props.state.date}</p><br/>
				<p>
				{this.props.state.text}
				</p>
			</div>
		)
	}
}