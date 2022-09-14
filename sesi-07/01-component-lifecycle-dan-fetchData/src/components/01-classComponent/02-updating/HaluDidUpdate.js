import React, { Component } from 'react'

export default class HaluDidUpdate extends Component {
	constructor(props){
		super(props);
		this.state = {
			count: 0,
			users: []
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.selectedState !== this.props.selectedState) {
			fetch('https://pathToApi.com')
				.then(resp => resp.json())
				.then(respJson => {
					// do what ever you want with your 'response'
					this.setState({
						isLoading: false,
						data: respJson,
					});
				})
				.catch(err => {
					console.log(err)
				})
		}
	}
}
