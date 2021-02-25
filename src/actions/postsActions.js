import { types } from '../types/types';
import { fetchData } from '../helpers/fetch';
import Swal from 'sweetalert2';

// Get all
export const postsStartLoading = async (dispatch) => {
	try {
		const res = await fetchData('posts');
		const body = await res.json();

		!res.ok ? Swal.fire('Error', 'No se pudo traer los posts.', 'error') : dispatch(actionPostsLoaded(body));
	} catch (error) {
		Swal.fire('Error', error, 'error');
	}
};

const actionPostsLoaded = (posts) => ({
	type: types.postLoaded,
	payload: posts,
});

// Get post by id
export const postStartLoadingById = async (dispatch, postById) => {
	try {
		const res = await fetchData(`posts/${postById}`);
		const body = await res.json();

		console.log(body);

		if (!res.ok) {
			Swal.fire('Error', 'No se pudo traer el post por id.', 'error');
			dispatch(actionClearActivePost());
		} else {
			dispatch(actionPostsLoadedById(body));
		}
	} catch (error) {
		Swal.fire('Error', error, 'error');
	}
};

const actionPostsLoadedById = (postById) => ({
	type: types.postSetActive,
	payload: postById,
});

export const actionClearActivePost = () => ({
	type: types.postClearActivePost,
});

// Post
export const postStartAddNew = async (dispatch, data) => {
	try {
		const res = await fetchData('posts', data, 'POST');
		const body = await res.json();

		if (!res.ok) {
			Swal.fire('Error', 'No se pudo dar de alta el post.', 'error');
		} else {
			dispatch(actionAddPost(body));
			Swal.fire('Success', 'Alta éxitosa!', 'success');
		}
	} catch (error) {
		Swal.fire('Error', error, 'error');
	}
};

const actionAddPost = (newPost) => ({
	type: types.postAddNew,
	payload: newPost,
});
