/** @format */

import {
	NEW_LOG_REQUEST,
	NEW_LOG_SUCCESS,
	NEW_LOG_FAIL,
	GET_LOGS_REQUEST,
	GET_LOGS_SUCCESS,
	GET_LOGS_FAIL,
} from '../types';

export const newLogReducer = (state = {}, action) => {
	switch (action.type) {
		case NEW_LOG_REQUEST:
			return { loading: true };
		case NEW_LOG_SUCCESS:
			return { loading: false, newLog: action.payload };
		case NEW_LOG_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const getLogsReducer = (state = { logs: [] }, action) => {
	switch (action.type) {
		case GET_LOGS_REQUEST:
			return { loading: true };
		case GET_LOGS_SUCCESS:
			return { loading: false, logs: action.payload };
		case GET_LOGS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
