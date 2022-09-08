import React from 'react';
import { Button } from 'react-bootstrap';

export default class Counter extends React.Component {
	constructor(){
		super()
		this.state = {
			counter: 0
		}
	}

	increment = () => {
		this.setState({
			counter: this.state.counter + 1
		})
	}

	decrement = () => {
		this.setState({
			counter: this.state.counter - 1
		})
	}

	render() {
		return (
			<div>
				<h3>Hitung counter : {this.state.counter}</h3>
				<br />
				<Button className='btn btn-warning' onClick={this.increment}>+</Button>
				<Button className='btn btn-danger' onClick={this.decrement}>-</Button>
			</div>
		)
	}
}