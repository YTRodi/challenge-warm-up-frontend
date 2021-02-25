const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchData = (endpoint, data, method = 'GET') => {
	const url = `${BASE_URL}/${endpoint}`;

	if (method === 'GET') return fetch(url);

	const options = {
		method,
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(data),
	};

	return fetch(url, options);
};
