import React, {Component} from "react";
import { Message } from "../atoms/Message";
import SubTitle from "../atoms/SubTitle";

export default class  NextMeetup extends Component {
	constructor () {
		super()
		this.state = {
				subtitle: 'Next Meetup',
				letterTitle: 'Awesome meetup and event',
				date: '25 January 2019',
				text: `Hello, JavaScript & Node.js Ninjas! 
				Get ready for our montly meetup JakartaJs! This will be our fifth meetup of 2018! \n
				The meetup format will contain some short stories and technical talks. \n
				If you have a short announscement you'd like to share with the audience, you may do so during open miv announcements.\n\n
				Remember to brimng a photo ID to get through building security.\n\n
				.....\n\n
				See you there!\n\n
				Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJs Organizers`	
		};	
	}

	render(){
		return (
			<div>
				<SubTitle subtitle = {this.state.subtitle}/>
				<Message state = {this.state}	/>
			</div>
		)
	}
}

