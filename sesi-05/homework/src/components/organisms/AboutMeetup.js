import React from "react";
import ContentAbout from "../atoms/ContentAbout";
import SubTitle from "../atoms/SubTitle";
import PropTypes from 'prop-types';

export default class AboutMeetup extends React.Component {
	constructor(){
		super()
		this.state = {
			subtitle: `About Meetup`,
			message: `Come and meet other developers in teh JavaScript and it's library in the Greater Jakarta area`,
			twitter: `@JakartaJs and we use the hashtag #jakartajs`
		};
		AboutMeetup.propTypes = {
			subtitle: PropTypes.string,
			message: PropTypes.string,
			twitter: PropTypes.string,
		}
	}
	render() {
		return (
			<div>
				<SubTitle subtitle = {this.state.subtitle} />
				<ContentAbout content = {this.state} />
			</div>
		)
	}
	
}