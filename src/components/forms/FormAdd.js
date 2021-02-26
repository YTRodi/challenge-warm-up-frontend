import React, { useContext } from 'react';

import { PostContext } from '../../context/PostContext';

import { isFormValid } from '../../helpers/validateFields';
import { useForm } from '../../hooks/useForm';

import { postStartAddNew, actionSetLoading } from '../../actions/postsActions';

const FormAdd = () => {
	const { dispatch, loading } = useContext(PostContext);

	const [formValues, handleInputChange, reset] = useForm({
		userId: 10,
		title: 'titulo de prueba',
		body: 'body de prueba',
	});

	let { userId, title, body } = formValues;

	const handleSubmitAdd = (e) => {
		e.preventDefault();

		// Parseo de id
		userId = parseInt(userId);

		// Validación de campos..
		if (isFormValid(formValues)) {
			dispatch(actionSetLoading());
			postStartAddNew(dispatch, { userId, title, body });
		}

		reset();
	};

	return (
		<>
			<div className='container'>
				<form className='mt-3' onSubmit={handleSubmitAdd}>
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

					<button type='submit' class='btn btn-outline-success btn-block' disabled={loading}>
						{loading ? (
							<>
								<span class='spinner-border spinner-border-sm' role='status'></span> Loading...
							</>
						) : (
							<>Add</>
						)}
					</button>
				</form>
			</div>
		</>
	);
};

export default FormAdd;
