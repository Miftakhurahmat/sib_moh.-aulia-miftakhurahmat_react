import React from "react";
import SubTitle from "../atoms/SubTitle";
import ProfileMembers from "../molecules/ProfilMembers";
import PropTypes from 'prop-types';

export default class Members extends React.Component {
	constructor(){
		super()
		this.state = {
			subtitle: `Members`,
		};
		Members.propTypes = {
			subtitle: PropTypes.string,
		}
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