import React, { useEffect, useReducer } from 'react';

import { PostContext } from './PostContext';
import { postReducer, initialState } from '../reducers/postReducer';

import { postsStartLoading } from '../actions/postsActions';

const PostContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(postReducer, initialState);

	useEffect(() => {
		postsStartLoading(dispatch);
	}, []);

	const value = {
		...state,
		dispatch,
	};

	return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export default PostContextProvider;
