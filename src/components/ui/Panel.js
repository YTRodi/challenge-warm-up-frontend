import React from 'react';
import Card from './Card';

const Panel = ({ posts }) => {
	return (
		<div
			className='container-fluid mt-3'
			style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}
		>
			{posts.map((post, index) => (
				<Card key={index} id={post.id} title={post.title} />
			))}
		</div>
	);
};

export default Panel;
