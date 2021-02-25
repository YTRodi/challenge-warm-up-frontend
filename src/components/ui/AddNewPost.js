import React, { useContext, useEffect } from 'react';
import { actionClearActivePost } from '../../actions/postsActions';
import { PostContext } from '../../context/PostContext';

const AddNewPost = () => {
	const { dispatch, data } = useContext(PostContext);

	useEffect(() => {
		dispatch(actionClearActivePost());
	}, [dispatch, data]);

	return (
		<div>
			<h1>Add new post component</h1>
			<hr />
		</div>
	);
};

export default AddNewPost;
