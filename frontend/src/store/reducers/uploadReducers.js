import {
	GET_PRESIGNED_URL_FAIL,
	GET_PRESIGNED_URL_REQUEST,
	GET_PRESIGNED_URL_SUCCESS,
	SEND_IMAGE_TO_S3_FAIL,
	SEND_IMAGE_TO_S3_REQUEST,
	SEND_IMAGE_TO_S3_SUCCESS,
} from '../types';

export const getPresignedURLReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_PRESIGNED_URL_REQUEST:
			return { loading: true };
		case GET_PRESIGNED_URL_SUCCESS:
			return { loading: false, uploadURL: action.payload };
		case GET_PRESIGNED_URL_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const sendImageToS3Reducer = (state = {}, action) => {
	switch (action.type) {
		case SEND_IMAGE_TO_S3_REQUEST:
			return { loading: true };
		case SEND_IMAGE_TO_S3_SUCCESS:
			return { loading: false, success: true };
		case SEND_IMAGE_TO_S3_FAIL:
			return { loading: false, success: false };
		default:
			return state;
	}
};
