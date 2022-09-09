import React from "react";
import ButtonJoin from "../atoms/ButtonJoin";
import DescMeetup from "../atoms/DescMeetup";
import Title from "../atoms/Title";
import PropTypes from 'prop-types';

export default class MeetupNow extends React.Component {
	constructor(){
		super()
		this.state = {
			title: 'Hacktiv8 Meetup',
			location: 'Jakarta, Indonesia',
			members: 1078,
			organizers: 'Adhy Wiranata'
		};
		MeetupNow.propTypes = {
			title: PropTypes.string,
			location: PropTypes.string,
			members: PropTypes.number,
			organizers: PropTypes.string,
		}
	}
	render() {
		return (
			<div className="flex bg-primary m-3">
				<img id='img-main' className="bg-secondary h-48 w-48 m-5"></img>
				<div id='meetup-desc' className="m-5">
					<Title title = {this.state.title} />
					<DescMeetup desc = {this.state} />
					<ButtonJoin />
				</div>
			</div>
		);
	}
	
}