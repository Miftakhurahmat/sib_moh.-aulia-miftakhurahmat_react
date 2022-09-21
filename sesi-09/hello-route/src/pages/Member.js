import React from 'react'
import { useParams } from 'react-router-dom'

const Member = () => {
	let params = useParams()
	
	return (
		<div>
			<h3>{useParams.memberName}</h3>
			<p>This is the detail page of {params.memberName}</p>
		</div>
	)
}

export default Member