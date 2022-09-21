import './App.css';
import AboutMe from './components/AboutMe';
import Blog from './components/Blog';
import BottomNav from './components/BottomNav';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

const App = () => {
	window.onscroll = () => {
		const header = document.getElementById('navbar');
		const fixedNav = header.offsetTop;

		if (window.pageYOffset > fixedNav) {
			header.classList.add('navbar-fixed');
		} else {
			header.classList.remove('navbar-fixed');
		}
	}

	return (
		<div className="App">
			<Navbar />
			<Hero />
			<AboutMe />
			<Portfolio />
			<Clients />
			<Blog />
			<Contact />
			<Footer />
			<BottomNav className="lg:hidden"/>
		</div>
	);
}

export default App;
