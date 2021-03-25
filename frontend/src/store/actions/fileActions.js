import axios from 'axios';

import {
	UPLOAD_FILE_REQUEST,
	UPLOAD_FILE_SUCCESS,
	UPLOAD_FILE_FAIL,
} from '../types';

export const uploadAction = (formData, config) => async (dispatch) => {
	try {
		dispatch({ type: UPLOAD_FILE_REQUEST });

		const { data } = await axios.post('upload', formData, config);

		dispatch({
			type: UPLOAD_FILE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: UPLOAD_FILE_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
