function Greet({ name, from = "Anonymous", order, get }) {
	const money = order * 10000;
	const isOne = get.length == 1;
	return (
		<>
			<h2>
				{order}. Halloo!! {name}!!! You Get ${money} Dan
				{isOne && `dan Satu Barang yaitu ${get}`}
			</h2>
			{!isOne &&
				get.map((e) => (
					<h2>
						{">"}
						{e}
					</h2>
				))}
			<h2>- dari {from}</h2>
		</>
	);
}

export default Greet;
