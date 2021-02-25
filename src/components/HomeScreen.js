import React, { useContext, useEffect } from 'react';

import { PostContext } from '../context/PostContext';
import { postsStartLoading } from '../actions/postsActions';

import Panel from './ui/Panel';

const HomeScreen = () => {
	const { dispatch } = useContext(PostContext);

	useEffect(() => {
		postsStartLoading(dispatch);
	}, [dispatch]);

	return (
		<div>
			<Panel />
		</div>
	);
};

export default HomeScreen;
