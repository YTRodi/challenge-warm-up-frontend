import React, { useContext } from 'react';

import { PostContext } from '../../context/PostContext';

import { isFormValid } from '../../helpers/validateFields';
import { useForm } from '../../hooks/useForm';

import { postStartAddNew } from '../../actions/postsActions';

const FormAdd = () => {
	const { dispatch } = useContext(PostContext);

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

					<button type='submit' className='btn btn-outline-success btn-block'>
						Add
					</button>
				</form>
			</div>
		</>
	);
};

export default FormAdd;
