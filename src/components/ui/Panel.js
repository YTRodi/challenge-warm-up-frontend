import React, { useContext, useEffect } from 'react';
import { PostContext } from '../../context/PostContext';

import Card from './Card';

const Panel = () => {
	const { activePost, data } = useContext(PostContext);

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
			{activePost ? (
				<Card key={activePost.id} id={activePost.id} title={activePost.title} />
			) : (
				data.map((post, index) => <Card key={index} id={post.id} title={post.title} />)
			)}
		</div>
	);
};

export default Panel;
