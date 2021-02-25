import { types } from '../types/types';

export const initialState = {
	data: [],
	activePost: null,
};

export const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.postLoaded:
			return {
				...state,
				data: [...action.payload],
			};

		case types.postAddNew:
			return {
				...state,
				data: [...state.data, action.payload],
			};

		default:
			return state;
	}
};
