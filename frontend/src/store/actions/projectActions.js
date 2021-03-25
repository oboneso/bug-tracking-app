/** @format */

/**
 *  1. createProject()
 *  2. fetchSingleProject()
 *  3. getProjects()
 *  4. deleteProjectAction()
 */

import axios from 'axios';
import {
	CREATE_PROJECT_FAIL,
	CREATE_PROJECT_REQUEST,
	CREATE_PROJECT_SUCCESS,
	GET_PROJECTS_SUCCESS,
	GET_PROJECTS_REQUEST,
	GET_PROJECTS_FAIL,
	GET_SINGLE_PROJECT_SUCCESS,
	DELETE_PROJECT_FAIL,
	DELETE_PROJECT_REQUEST,
	DELETE_PROJECT_SUCCESS,
} from '../types';

export const createProject = (title, description, id) => async (
	dispatch,
	getState,
) => {
	try {
		dispatch({
			type: CREATE_PROJECT_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.post(
			'projects',
			{ title, description, id },
			config,
		);

		await dispatch({
			type: CREATE_PROJECT_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CREATE_PROJECT_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		console.log(error);
	}
};

export const fetchSingleProject = (projectId) => async (dispatch, getState) => {
	try {
		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`project/${projectId}`, config);

		dispatch({
			type: GET_SINGLE_PROJECT_SUCCESS,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const getProjects = () => async (dispatch, getState) => {
	try {
		dispatch({ type: GET_PROJECTS_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get('projects', config);

		dispatch({
			type: GET_PROJECTS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_PROJECTS_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const deleteProjectAction = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: DELETE_PROJECT_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		await axios.delete(`project/${id}`, config);

		dispatch({ type: DELETE_PROJECT_SUCCESS });
	} catch (error) {
		dispatch({
			type: DELETE_PROJECT_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
