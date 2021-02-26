import React, { useContext, useEffect } from 'react';
import { PostContext } from '../../context/PostContext';

import { actionClearActivePost } from '../../actions/postsActions';
import Form from '../forms/Form';

const AddNewPost = () => {
	const { dispatch, data } = useContext(PostContext);

	useEffect(() => {
		dispatch(actionClearActivePost());
	}, [dispatch, data]);

	return (
		<div
			className='container-fluid mt-3'
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexWrap: 'wrap',
			}}
		>
			<Form />
		</div>
	);
};

export default AddNewPost;
