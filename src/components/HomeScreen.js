import React, { useContext, useEffect } from 'react';

import { PostContext } from '../context/PostContext';
import { postsStartLoading } from '../actions/postsActions';

import Navbar from './ui/Navbar';
import Panel from './ui/Panel';

const HomeScreen = () => {
	const { data, dispatch } = useContext(PostContext);

	useEffect(() => {
		postsStartLoading(dispatch);
	}, [dispatch]);

	// console.log(data);

	return (
		<div>
			<Panel posts={data} />
		</div>
	);
};

export default HomeScreen;
