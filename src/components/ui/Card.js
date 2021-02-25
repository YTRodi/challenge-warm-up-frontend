import React from 'react';

const Card = ({ id, title }) => {
	return (
		<div>
			<div className='card border-info m-2 text-center' style={{ maxWidth: '27rem', width: '20rem', height: '16rem' }}>
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
							<div className='col-4'>
								<button className='btn btn-primary'>Details</button>
							</div>
							<div className='col-4'>
								<button className='btn btn-danger'>Delete</button>
							</div>
							<div className='col-4'>
								<button className='btn btn-info'>Update</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
