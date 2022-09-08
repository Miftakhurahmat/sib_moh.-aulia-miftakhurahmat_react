import React from "react";
import ContentAbout from "../atoms/ContentAbout";
import SubTitle from "../atoms/SubTitle";

export default class MeetupNow extends React.Component {
	constructor(){
		super()
		this.state = {
			subtitle: `About Meetup`,
			message: `Come and meet other developers in teh JavaScript and it's library in the Greater Jakarta area`,
			twitter: `@JakartaJs and we use the hashtag #jakartajs`
		};
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