import { Container, Card, nav } from 'react-bootstrap';
import React from 'react';

export default class Users extends React.Component {
	constructor(){
		super()
		this.state = {
			username: 'user001',
			password: '12345',
		}
	}

	
	// create function
	getUsername(){
		return this.state.username
	}
	getPassword(){
		return this.state.password
	}

	// halaman 8 sesi 5
	// create function > change button
	setUsername = () => {
		this.setState({
			username: 'user888',
			password: '111111'
		})
	}
	render() {
		return (
			<>
				<div className='text-center'>
					<h1>Belajar State</h1>
					{/* step one get this.state */}
					{/* <div className='row'>
						<div className='col'>Username : {this.state.username}</div>
						<div className='col'>Password : {this.state.password}</div>
					</div> */}
					<hr></hr>
					{/* step two return getUsername this.state */}
					{/* <div className='row'>
						<div className='col'>Username : {this.getUsername()}</div>
						<div className='col'>Password : {this.getPassword()}</div>
					</div> */}
					{/* step three set data baru state */}
					<div className='row'>
						<div className='col-sm'>
							Lihat perubahan set data &gt; Username : {this.getUsername()}
						</div>
						<div className='col-sm'>
							Lihat perubahan set data &gt; Password : {this.getPassword()}
						</div>
						<button onClick={this.setUsername}>Set Username</button>
					</div>
				</div>
				
			</>
		);
	}
}