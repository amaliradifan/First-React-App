export default function Heading({
	color,
	text = "Trying Props In First React App",
}) {
	return <h1 style={{ color: color }}>{text}</h1>;
}
