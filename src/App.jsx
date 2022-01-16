// Hooks
import useAxios from "./hooks/useAxios";

const App = (props) => {
	const [fetching, data, error, reFetch] = useAxios("https://jsonplaceholder.typicode.com/users");

	return (
		<div id="main">
			<button onClick={reFetch}>ReFetch</button>
			{fetching && <p style={{ fontSize: "30px" }}>Loading ...</p>}
			{data && <p style={{ color: "green" }}>{JSON.stringify(data)}</p>}
			{error && <p style={{ color: "red" }}>{error}</p>}
		</div>
	);
};

export default App;
