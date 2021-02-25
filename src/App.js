import React from 'react';

import PostContextProvider from './context/PostContextProvider';

import AppRouter from './routers/AppRouter';

const App = () => {
	return (
		<PostContextProvider>
			<AppRouter />
		</PostContextProvider>
	);
};

export default App;
