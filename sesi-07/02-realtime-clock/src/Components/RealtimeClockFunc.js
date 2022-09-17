import React, {useState} from 'react'

function RealtimeClockFunc() {
	function tick(){
		setDate(new Date())
	}

	const [date, setDate] = useState(new Date())

	setInterval(() => tick(), 1000)

	return (
		<div className='App'>
			<h1>Realtime CLOCK menggunakan Function Component</h1>
			<hr />
			<h1>{date.toLocaleTimeString()}</h1>
		</div>
	)
	
}

export default RealtimeClockFunc
