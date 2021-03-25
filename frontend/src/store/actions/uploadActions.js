import lambdaAPI from 'helpers/lambdaAPI';
import axios from 'axios';

import {
	GET_PRESIGNED_URL_FAIL,
	GET_PRESIGNED_URL_REQUEST,
	GET_PRESIGNED_URL_SUCCESS,
	SEND_IMAGE_TO_S3_FAIL,
	SEND_IMAGE_TO_S3_REQUEST,
	SEND_IMAGE_TO_S3_SUCCESS,
} from '../types';
import { createAlert, modalStatusAction } from './navigationActions';
import { getUserDetails, updateUserProfile } from './userActions';

import { cleanURL } from 'helpers/awsS3Handler';

export const getPresignedURL = () => async (dispatch) => {
	try {
		dispatch({ type: GET_PRESIGNED_URL_REQUEST });

		const response = await axios.post(lambdaAPI);

		dispatch({
			type: GET_PRESIGNED_URL_SUCCESS,
			payload: response.data.uploadURL,
		});
	} catch (error) {
		dispatch({
			type: GET_PRESIGNED_URL_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const sendImageToS3 = (uploadURL, image) => async (
	dispatch,
	getState,
) => {
	try {
		dispatch({ type: SEND_IMAGE_TO_S3_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const response = await axios.put(uploadURL, image);

		const url = cleanURL(response);

		const avatar = { avatar: url };

		dispatch({
			type: SEND_IMAGE_TO_S3_SUCCESS,
		});

		const updateUser = async () => {
			await dispatch(updateUserProfile(avatar));
			await dispatch(getUserDetails(userInfo._id));
		};
		updateUser();
		dispatch(modalStatusAction(false, ''));
		dispatch(createAlert('Image uploaded successfully'));
	} catch (error) {
		dispatch({
			type: SEND_IMAGE_TO_S3_FAIL,
		});
	}
};
