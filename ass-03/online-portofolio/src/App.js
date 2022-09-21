import Navbar from "./components/organisms/Navbar";
import Router from "./router/index";

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
		<div>
			<Navbar />
			<Router />
		</div>
	);
}

export default App;
