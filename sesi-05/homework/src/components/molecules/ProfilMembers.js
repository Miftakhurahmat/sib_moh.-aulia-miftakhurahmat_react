import React, { Component } from "react";
import { MembersName } from "../atoms/MembersName";
import { RoleMembers } from "../atoms/RoleMembers";

export default class ProfileMembers extends Component {
	constructor(){
		super()
		this.state = {
			role: `Organizers`,
			name: `Adhy Wiranata`,
			otherMembers: 4
		};
	}

	render (){
		return(
			<div className="bg-primary mx-10 flex">
				<img className="profile-img bg-secondary h-16 w-16 m-5 rounded-full"></img>
				<div className="member-desc my-5">
					<RoleMembers role = {this.state.role} />
					<MembersName name = {this.state} />
				</div>
			</div>
		)
	}
}