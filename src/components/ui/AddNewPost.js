import React, { useContext, useEffect } from 'react';
import { PostContext } from '../../context/PostContext';

import { actionClearActivePost } from '../../actions/postsActions';
import FormAdd from '../forms/FormAdd';

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
			<FormAdd />
		</div>
	);
};

export default AddNewPost;
