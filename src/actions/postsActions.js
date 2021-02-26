import { types } from '../types/types';
import { fetchData } from '../helpers/fetch';
import Swal from 'sweetalert2';
import { uiCloseModal } from './uiAction';

// Loading data (SET)
export const actionSetLoading = () => ({
	type: types.postSetLoading,
});

export const actionClearLoading = () => ({
	type: types.postClearLoading,
});

// Get all
export const postsStartLoading = async (dispatch) => {
	try {
		const res = await fetchData('posts');
		const body = await res.json();

		!res.ok ? Swal.fire('Error', `Couldn't bring posts.`, 'error') : dispatch(actionPostsLoaded(body));
	} catch (error) {
		Swal.fire('Error', error.toString(), 'error');
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

		if (!res.ok) {
			Swal.fire('Error', `Couldn't bring the post by id.`, 'error');
			dispatch(actionClearActivePost());
		} else {
			dispatch(actionPostsLoadedById(body));
		}
	} catch (error) {
		Swal.fire('Error', error.toString(), 'error');
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
			Swal.fire('Error', `The post couldn't be registered`, 'error');
		} else {
			dispatch(actionAddPost(body));
			dispatch(actionClearLoading());
			Swal.fire('Success', 'Alta éxitosa!', 'success');
		}
	} catch (error) {
		Swal.fire('Error', error.toString(), 'error');
	}
};

const actionAddPost = (newPost) => ({
	type: types.postAddNew,
	payload: newPost,
});

// Delete
export const postStartDelete = async (dispatch, idPostToDelete) => {
	try {
		const res = await fetchData(`posts/${idPostToDelete}`, {}, 'DELETE');

		if (!res.ok) {
			Swal.fire('Error', `Couldn't delete post`, 'error');
		} else {
			dispatch(actionPostDelete(idPostToDelete));
			Swal.fire('Deleted', 'Operation deleted successfully', 'success');
		}
	} catch (error) {
		Swal.fire('Error', error.toString(), 'error');
	}
};

const actionPostDelete = (idPostToDelete) => ({
	type: types.postDeleted,
	payload: idPostToDelete,
});

// Update
export const postStartUpdate = async (dispatch, postToUpdate) => {
	try {
		const res = await fetchData(`posts/${postToUpdate.id}`, postToUpdate, 'PUT');

		if (!res.ok) {
			Swal.fire('Error', `Couldn't update post`, 'error');
		} else {
			dispatch(actionPostUpdate(postToUpdate));
			dispatch(actionClearLoading());
			dispatch(uiCloseModal());
			Swal.fire('Updated', 'Operation updated successfully', 'success');
		}
	} catch (error) {
		Swal.fire('Error', error.toString(), 'error');
	}
};

const actionPostUpdate = (post) => ({
	type: types.postUpdated,
	payload: post,
});
