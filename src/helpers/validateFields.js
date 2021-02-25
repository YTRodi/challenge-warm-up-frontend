import Swal from 'sweetalert2';

export const isFormValid = ({ title, body }) => {
	if (title.trim().length === 0) {
		Swal.fire('Error', 'The title is required', 'error');
		return false;
	} else if (title.trim().length <= 2) {
		Swal.fire('Error', 'The title cannot be less than or equal to 2 characters', 'error');
		return false;
	} else if (body.trim().length === 0) {
		Swal.fire('Error', 'The body is required', 'error');
		return false;
	} else if (body.trim().length <= 2) {
		Swal.fire('Error', 'The body cannot be less than or equal to 2 characters', 'error');
		return false;
	}
	return true;
};
