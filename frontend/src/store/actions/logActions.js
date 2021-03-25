/** @format */

import axios from 'axios';

import {
	NEW_LOG_FAIL,
	NEW_LOG_SUCCESS,
	NEW_LOG_REQUEST,
	GET_LOGS_REQUEST,
	GET_LOGS_SUCCESS,
	GET_LOGS_FAIL,
} from '../types';

export const newLog = (logType, log) => async (dispatch, getState) => {
	try {
		dispatch({ type: NEW_LOG_REQUEST });
		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const response = await axios.post(
			'/logs',
			{ user: userInfo._id, logType: logType, log: log },
			config,
		);
		const { data } = response;
		console.log(data);

		dispatch({
			type: NEW_LOG_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: NEW_LOG_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getLogs = () => async (dispatch, getState) => {
	try {
		dispatch({ type: GET_LOGS_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const response = await axios.get('logs', config);

		dispatch({
			type: GET_LOGS_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: GET_LOGS_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
