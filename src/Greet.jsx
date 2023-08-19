function Greet({ name, from = "Anonymous", order, get }) {
	const money = order * 10000;
	return (
		<>
			<h1>
				Halloo!! {name}!!! You Get ${money}{" "}
				{get.length == 1 && "dan Satu Barang yaitu "} {get.join(", ")}
			</h1>
			<h2>- dari {from}</h2>
		</>
	);
}

export default Greet;
