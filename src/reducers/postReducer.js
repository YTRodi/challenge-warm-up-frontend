import { types } from '../types/types';

export const initialState = {
	data: [],
	activePost: null,
	loading: false,
	modalOpen: false,
};

export const postReducer = (state = initialState, action) => {
	switch (action.type) {
		// UI
		case types.uiOpenModal:
			return {
				...state,
				modalOpen: true,
			};

		case types.uiCloseModal:
			return {
				...state,
				modalOpen: false,
			};

		// POSTS
		case types.postSetLoading:
			return {
				...state,
				loading: true,
			};

		case types.postClearLoading:
			return {
				...state,
				loading: false,
			};

		case types.postLoaded:
			return {
				...state,
				data: [...action.payload],
			};

		case types.postSetActive:
			return {
				...state,
				activePost: action.payload,
			};

		case types.postClearActivePost:
			return {
				...state,
				activePost: initialState.activePost,
			};

		case types.postAddNew:
			return {
				...state,
				data: [...state.data, action.payload],
			};

		case types.postDeleted:
			return {
				...state,
				data: state.data.filter((post) => post.id !== action.payload),
			};

		case types.postUpdated:
			return {
				...state,
				data: state.data.map((post) => (post.id === action.payload.id ? action.payload : post)),
			};

		default:
			return state;
	}
};
