import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { PostContext } from '../../context/PostContext';

import { useForm } from '../../hooks/useForm';
import { postStartLoadingById } from '../../actions/postsActions';

const Navbar = () => {
	const { dispatch } = useContext(PostContext);

	const [formValues, handleInputChange, reset] = useForm({
		postById: '',
	});

	const { postById } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		postStartLoadingById(dispatch, parseInt(postById));
		reset();
	};

	return (
		<div>
			<nav className='navbar navbar-expand-md navbar-dark bg-dark'>
				<Link to='/' className='navbar-brand'>
					Challenge Warm Up | Alkemy
				</Link>

				<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item'>
							<NavLink exact activeClassName='active' to='/home' className='nav-link'>
								Home
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink exact activeClassName='active' to='/add' className='nav-link'>
								Add post
							</NavLink>
						</li>
					</ul>

					<form className='form-inline my-2 my-lg-0' onSubmit={handleSubmit}>
						<input
							className='form-control mr-sm-2'
							type='search'
							placeholder='Search post by id'
							autoComplete='off'
							name='postById'
							value={postById}
							onChange={handleInputChange}
						/>
						<button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
							Search
						</button>
					</form>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
