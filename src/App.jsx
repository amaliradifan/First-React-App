import "./App.css";
import Greet from "./greet";
import Name from "./Name";

function App() {
	return (
		<div>
			<Greet
				name="Dipan"
				from="Mama"
				order={1}
				get={["Hotwheels", " Rc Tank"]}
			/>
			<Greet name="Radif" from="Papa" order={2} get={["Sepeda"]} />
			<Greet
				name="Fikri"
				from="Dedek"
				order={3}
				get={["Baju Bola", " sepatu Bola"]}
			/>
		</div>
	);
}

export default App;
