import React, { useContext } from 'react';
import Modal from 'react-modal';
import { PostContext } from '../../context/PostContext';

import Form from '../forms/Form';

import { uiCloseModal } from '../../actions/uiAction';
import { actionClearActivePost } from '../../actions/postsActions';

// Pasarlo a un helper (setModalStyle y que esta función retorne un obj con los estilos (ruta /styles/modal))
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};
Modal.setAppElement('#root');

const Details = () => {
	const { modalOpen, dispatch } = useContext(PostContext);

	const closeModal = () => {
		dispatch(uiCloseModal());
		dispatch(actionClearActivePost());
	};

	return (
		<Modal
			isOpen={modalOpen}
			onRequestClose={closeModal}
			style={customStyles}
			closeTimeoutMS={200}
			className='modal'
			overlayClassName='modal-fondo'
		>
			<Form />
		</Modal>
	);
};

export default Details;
