import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
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
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
