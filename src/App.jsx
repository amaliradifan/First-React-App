import "./App.css";
import Greet from "./greet";
import Name from "./Name";

function App() {
	return (
		<div>
			<Greet name="Dipan" from="Mama" order={1} />
			<Greet name="Radif" from="Papa" order={2} />
			<Greet name="Fikri" from="Dedek" order={3} />
		</div>
	);
}

export default App;
