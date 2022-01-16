import { useEffect, useState, useRef } from "react";

import axios from "axios";

const useAxios = (url) => {
	const [fetching, setFetching] = useState(false);

	const data = useRef(false);
	const setData = (theData) => (data.current = theData);

	const error = useRef(false);
	const setError = (theError) => (error.current = theError);

	const handleGet = async () => {
		setData(false);
		setError(false);
		setFetching(true);

		try {
			const { data: fetchedData } = await axios.get(url);
			setData(fetchedData);
		} catch ({ message }) {
			setError(message);
		}

		setFetching(false);
	};

	useEffect(() => {
		handleGet();
	}, []);

	return [fetching, data.current, error.current, handleGet];
};

export default useAxios;
