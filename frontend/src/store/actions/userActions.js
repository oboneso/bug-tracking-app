/** @format */

import axios from 'axios';

import {
	SET_FEATURED_PROFILE_REQUEST,
	SET_FEATURED_PROFILE_SUCCESS,
	SET_FEATURED_PROFILE_FAIL,
	USER_LOGIN_FAIL,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_REQUEST,
	USER_LIST_FAIL,
	USER_LIST_SUCCESS,
	USER_LIST_REQUEST,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_REQUEST,
	USER_DETAILS_FAIL,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_REQUEST,
	USER_DETAILS_RESET,
	USER_UPDATE_PROFILE_FAIL,
	USER_UPDATE_PROFILE_SUCCESS,
	USER_UPDATE_PROFILE_REQUEST,
} from '../types';

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post('login', { email, password }, config);

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});

		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// remove userInfo from localStorage & dispatch userAction type: USER_LOGOUT
export const logout = () => (dispatch) => {
	localStorage.removeItem('userInfo');
	dispatch({ type: USER_LOGOUT });
	dispatch({ type: USER_DETAILS_RESET });
};

export const register = (name, username, email, password) => async (
	dispatch,
) => {
	try {
		dispatch({ type: USER_REGISTER_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(
			'register',
			{ name, username, email, password },
			config,
		);

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data,
		});

		// dispatch({
		// 	type: USER_LOGIN_SUCCESS,
		// 	payload: data,
		// });

		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getUserDetails = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: USER_DETAILS_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`profile/${id}`, config);

		dispatch({
			type: USER_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_DETAILS_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
	try {
		dispatch({ type: USER_UPDATE_PROFILE_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.put('profile', user, config);

		dispatch({
			type: USER_UPDATE_PROFILE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_UPDATE_PROFILE_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getUsers = () => async (dispatch, getState) => {
	try {
		dispatch({ type: USER_LIST_REQUEST });
		const {
			userLogin: { userInfo },
		} = getState();
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get('users', config);
		dispatch({
			type: USER_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_LIST_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const setFeaturedProfile = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: SET_FEATURED_PROFILE_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`profile/${id}`, config);
		console.log(`featured actions ${JSON.stringify(data)}`);

		dispatch({
			type: SET_FEATURED_PROFILE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: SET_FEATURED_PROFILE_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
