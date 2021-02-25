import React, { useReducer } from 'react';

import { PostContext } from './PostContext';
import { postReducer, initialState } from '../reducers/postReducer';

const PostContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(postReducer, initialState);

	const value = {
		...state,
		dispatch,
	};

	return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export default PostContextProvider;
