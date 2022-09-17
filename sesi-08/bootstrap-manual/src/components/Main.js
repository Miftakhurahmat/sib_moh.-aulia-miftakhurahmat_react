import React from 'react'
import { Content, Footer, Header }from './template'
const Main = () => {
  return (
	<>
		<Header />
		<div className='container'>
			<Content />
		</div>
		<Footer />
	</>
  )
}

export default Main