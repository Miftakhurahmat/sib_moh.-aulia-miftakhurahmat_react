import Clock from "./components/01-classComponent/01-mounting/Clock";
import ErrorBoundary from "./components/01-classComponent/04-errorHandling/ErrorBoundary";
import HaluClass from "./components/03-fetchData/HaluClass";
import Example from "./components/02-functionComponent/Example"
import HaluFunction from "./components/03-fetchData/HaluFunction";

function App() {
	
	return (
		<>
			<div>
				
				{/* this Clock */}
				<Clock/>
				<hr />

				{/* this Halu merupakan fetch data menggunakan class komponen*/}
				<HaluClass />

				{/* Fetch data merupakan fetch data menggunakan fungsional komponen*/}
				<HaluFunction />

				{/* this example memuat usestate dan use effect dalam fungsional komponen */}
				<Example />

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
