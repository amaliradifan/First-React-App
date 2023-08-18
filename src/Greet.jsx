function Greet({ name, from = "Anonymous", order }) {
	const get = order * 10000;
	return (
		<>
			<h1>
				Halloo!! {name}!!! You Get ${get}
			</h1>
			<h2>- {from}</h2>
		</>
	);
}

export default Greet;
