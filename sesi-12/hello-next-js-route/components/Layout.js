import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (props) => {
	return (
		<div className='container mx-auto'>
			<Head>
				<title>{props.title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			{props.children}
		</div>
	)
}

export default Layout