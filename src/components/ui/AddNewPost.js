import React, { useContext, useEffect } from 'react';
import { PostContext } from '../../context/PostContext';

import { actionClearActivePost } from '../../actions/postsActions';
import FormAdd from '../forms/FormAdd';

const AddNewPost = () => {
	const { dispatch, data, activePost } = useContext(PostContext);

	useEffect(() => {
		dispatch(actionClearActivePost());
	}, [dispatch, data]);

	// Ponerlo en el submit del formulario
	// TODO: lógica del alta éxitosa, falta el formulario de alta. (ambos campos son required)
	// useEffect(() => {
	// 	// postStartAddNew(dispatch, obj);
	// }, []);

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
			{/* {activePost && <Card key={activePost.id} id={activePost.id} title={activePost.title} />} */}
			<FormAdd />
		</div>
	);
};

export default AddNewPost;
