import './App.css';

function Header() {
	<header className='header'>
		<h1>My First React app</h1>
	</header>
}

function Content() {
	<div className='content'>
		<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint accusantium eius iusto optio cupiditate consequuntur earum! Fugiat temporibus facere ab mollitia minus, possimus cupiditate molestiae esse, ullam, accusamus officia consequuntur?
		</p>
	</div>
}

function Footer() {
	<>
		<div className='footer'>
			<p>
				&copy; My self - 2021
			</p>
		</div>
	</>
}

function App() {
	return (
		<div className="container">
			<Header />
			<hr />
			<Content />
			<hr />
			<Footer />
		</div>
	);
}

export default App;
