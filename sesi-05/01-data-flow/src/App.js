import Counter from "./components/Counter";
import Hero from "./components/Hero";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
		<Users />
		<hr></hr>
		<Counter/>
		<hr></hr>
		<Hero />
	</div>
  );
}

export default App;
