import Clock from "./components/01-classComponent/01-mounting/Clock";
import Halu from "./components/01-classComponent/02-updating/Halu";
import ErrorBoundary from "./components/01-classComponent/04-errorHandling/ErrorBoundary";

function App() {
	
	return (
		<>
			<div>
				
				{/* this Clock */}
				<Clock/>
				<hr />

				{/* this Halu */}
				<Halu />

				{/* this error Boundary */}
				<ErrorBoundary>
					{/* isi props */}
					<Clock />
				</ErrorBoundary>
			</div>
		</>
	);
}

export default App;
