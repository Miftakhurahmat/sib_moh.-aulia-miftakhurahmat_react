import React from 'react'

const Title = (props) => {
	return (
		<div className="navbar-end lg:navbar-start">
			<div className="avatar">
				<div className="w-8 lg:w-12 rounded-full">
					<img src="./img/profile-image.png" className='bg-red-900' />
				</div>
			</div>
			<a className="btn btn-ghost normal-case text-sm lg:text-xl">{props.title}</a>
		</div>
	)
}

export default Title