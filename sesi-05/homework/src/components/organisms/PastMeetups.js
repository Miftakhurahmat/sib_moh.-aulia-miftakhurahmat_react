import React from "react";
import SubTitle from "../atoms/SubTitle";
import Cards from "../molecules/Cards";
import PropTypes from 'prop-types';

export default class MeetupNow extends React.Component {
	constructor(){
		super()
		this.state = {
			subtitle: `Past Meetups`,
		};
		MeetupNow.propTypes = {
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
				<Cards />
			</div>
		)
	}
	
}