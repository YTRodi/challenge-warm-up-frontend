import React, { useContext } from 'react';
import { PostContext } from '../../context/PostContext';

import { postStartDelete } from '../../actions/postsActions';

const Card = ({ id, title }) => {
	const { dispatch } = useContext(PostContext);

	const handleDelete = () => {
		postStartDelete(dispatch, id);
	};

	return (
		<div>
			<div className='card m-2 text-center' style={{ maxWidth: '27rem', width: '20rem', height: '16rem' }}>
				<div className='card-header'>{`id ${id}`}</div>

				<div className='card-body'>
					<div
						className='container'
						style={{
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<div className='row'>
							<h4 className='card-title'>{title}</h4>
						</div>

						<div className='row'>
							<div className='col'>
								<button className='btn btn-primary'>Details</button>
							</div>
							<div className='col'>
								<button className='btn btn-danger' onClick={handleDelete}>
									Delete
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
