import React, { Component } from "react";

export default class Copyrigtht extends Component {
	constructor (props) {
		super(props)
	}

	render (){
		return(
			<>
				<br/><br/>
				<hr className="mx-10"/>
				<br/><br/>
				<div className="flex">
					<h2 className="mx-auto">Copyright {this.props.name.name} {this.props.name.year}</h2>
				</div>
				<br></br>
			</>
			
		)
		
		
	}
}