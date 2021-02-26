import React, { useState, useContext, useEffect } from 'react';

import { PostContext } from '../../context/PostContext';

import { isFormValid } from '../../helpers/validateFields';

import {
	actionClearActivePost,
	postStartAddNew,
	actionSetLoading,
	postStartDelete,
	postStartUpdate,
} from '../../actions/postsActions';
import { uiCloseModal } from '../../actions/uiAction';

const initPost = {
	userId: 0,
	title: '',
	body: '',
};

const Form = () => {
	const { dispatch, loading, activePost } = useContext(PostContext);

	const [formValues, setFormValues] = useState(initPost);
	const { userId, title, body } = formValues;
	const parsedValues = {
		...formValues,
		userId: parseInt(userId),
	};

	useEffect(() => {
		if (!activePost) {
			setFormValues(initPost);
		} else {
			setFormValues(activePost);
		}
	}, [activePost, setFormValues]);

	const handleInputChange = ({ target }) => {
		setFormValues({
			...formValues,
			[target.name]: target.value,
		});
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();

		if (isFormValid(formValues)) {
			if (!activePost) {
				dispatch(actionSetLoading());
				postStartAddNew(dispatch, parsedValues);
				setFormValues(initPost);
			} else {
				dispatch(actionSetLoading());
				dispatch(postStartUpdate(dispatch, parsedValues));
			}
		}
	};

	const handleDelete = () => {
		postStartDelete(dispatch, activePost.id);
		dispatch(actionClearActivePost());
		dispatch(uiCloseModal());
	};

	return (
		<>
			<div className='container'>
				<form className='mt-3' onSubmit={handleSubmitForm}>
					<div className='form-group'>
						<label htmlFor='inputUserId'>User Id</label>
						<input
							type='number'
							className='form-control'
							placeholder='User id of the post'
							id='inputUserId'
							value={userId}
							name='userId'
							onChange={handleInputChange}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='inputTitle'>Title</label>
						<input
							type='text'
							className='form-control'
							placeholder='Title of the post'
							id='inputTitle'
							value={title}
							name='title'
							onChange={handleInputChange}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='inputBody'>Body</label>
						<textarea
							type='text'
							className='form-control'
							placeholder='Body of the post'
							id='inputBody'
							value={body}
							name='body'
							onChange={handleInputChange}
						/>
					</div>

					<button className='btn btn-outline-success btn-block' disabled={loading}>
						{loading ? (
							<>
								<span className='spinner-border spinner-border-sm' role='status'></span> Loading...
							</>
						) : !activePost ? (
							'Add'
						) : (
							'Update'
						)}
					</button>

					{activePost && (
						<button className='btn btn-outline-danger btn-block' disabled={loading} onClick={handleDelete}>
							Delete
						</button>
					)}
				</form>
			</div>
		</>
	);
};

export default Form;
