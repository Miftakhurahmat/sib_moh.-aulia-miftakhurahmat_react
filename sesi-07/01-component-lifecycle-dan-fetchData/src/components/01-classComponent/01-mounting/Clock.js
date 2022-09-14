import React from 'react'

class Clock extends React.Component {
	constructor(props){ //untuk mendefinisikan state awal sebuah komponen
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount(){ //melakukan async request untuk mengambil data dari API.
		this.timerID = setInterval(() => { //ngeset interval dan menjalankan fungsinya
			this.tick()
		}, 1000);
	}

	tick(){
		this.setState({
			date: new Date()
		});
	}

	render() { //fungsi me-return sebuah komponen tidak boleh ada proses perubahan state disini
		return (
			<div>
				<h1>Hello, World!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}</h2>
			</div>
		);
	}
}

export default Clock;