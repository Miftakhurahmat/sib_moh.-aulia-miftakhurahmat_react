import React from "react";
import SubTitle from "../atoms/SubTitle";
import ProfileMembers from "../molecules/ProfilMembers";

export default class MeetupNow extends React.Component {
	constructor(){
		super()
		this.state = {
			subtitle: `Members`,
		};
	}
	render() {
		return (
			<div>
				<div className="flex">
					<SubTitle subtitle = {this.state.subtitle} />
					<p className="mr-10 mt-3">See all</p>
				</div>
				<ProfileMembers />
			</div>
		)
	}
	
}