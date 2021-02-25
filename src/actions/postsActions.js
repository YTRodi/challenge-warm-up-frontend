import { types } from '../types/types';
import { fetchData } from '../helpers/fetch';

export const postsStartLoading = async (dispatch) => {
	try {
		const res = await fetchData('posts');
		const body = await res.json();

		!res.ok ? console.log('ERROR al traer los posts') : dispatch(actionPostsLoaded(body));
	} catch (error) {
		console.log(error);
	}
};

const actionPostsLoaded = (posts) => ({
	type: types.postLoaded,
	payload: posts,
});

// const addNewPost = (post) => ({
const addNewPost = () => ({
	type: types.postLoaded,
	payload: {
		title: 'este es un titulo de prueba!',
		body: 'este es el cuerpo del post!',
	},
});
