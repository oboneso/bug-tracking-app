/** @format */

import { responsiveFontSizes } from '@material-ui/core';
import axios from 'axios';
import {
	GET_TICKETS_FAIL,
	GET_TICKETS_SUCCESS,
	GET_TICKETS_REQUEST,
	CREATE_TICKET_REQUEST,
	CREATE_TICKET_SUCCESS,
	CREATE_TICKET_FAIL,
	EDIT_TICKET_REQUEST,
	EDIT_TICKET_SUCCESS,
	EDIT_TICKET_FAIL,
	DELETE_TICKET_REQUEST,
	DELETE_TICKET_SUCCESS,
	DELETE_TICKET_FAIL,
	SINGLE_TICKET_ID_REQUEST,
	SINGLE_TICKET_ID_SUCCESS,
	SINGLE_TICKET_ID_FAIL,
	TICKET_COMMENT_REQUEST,
	TICKET_COMMENT_SUCCESS,
	TICKET_COMMENT_FAIL,
	GET_TICKET_REQUEST,
	GET_TICKET_SUCCESS,
	GET_TICKET_FAIL,
} from '../types';

export const getTickets = () => async (dispatch) => {
	try {
		dispatch({ type: GET_TICKETS_REQUEST });

		const { data } = await axios.get('tickets');

		dispatch({
			type: GET_TICKETS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_TICKETS_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const createTicket = (
	ticketType,
	title,
	description,
	status,
	developer,
	priority,
	project,
	userInfo,
) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_TICKET_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const response = await axios.post(
			'tickets',
			{
				ticketType,
				title,
				description,
				status,
				developer,
				priority,
				project,
				userInfo,
			},
			config,
		);

		const createTicketResponse = {
			data: response.data,
			status: response.status,
			statusText: response.statusText,
		};
		dispatch({
			type: CREATE_TICKET_SUCCESS,
			payload: createTicketResponse,
		});
	} catch (error) {
		dispatch({
			type: CREATE_TICKET_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const singleTicketId = (id) => async (dispatch) => {
	try {
		dispatch({ type: SINGLE_TICKET_ID_REQUEST });
		const data = await id;
		dispatch({
			type: SINGLE_TICKET_ID_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: SINGLE_TICKET_ID_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const deleteTicket = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: DELETE_TICKET_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.delete(`tickets/${id}`, config);
		dispatch({
			type: DELETE_TICKET_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: DELETE_TICKET_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const ticketComment = (comment, id) => async (dispatch, getState) => {
	try {
		dispatch({ type: TICKET_COMMENT_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const newComment = { comment, userInfo };
		const { data } = await axios.put(`comment/${id}`, { newComment }, config);

		dispatch({ type: TICKET_COMMENT_SUCCESS, payload: data });
	} catch (error) {
		if (error.message) {
			console.log('error.messsage');
			dispatch({
				type: TICKET_COMMENT_FAIL,
				payload:
					error.message && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	}
};

export const getTicket = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: GET_TICKET_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`tickets/${id}`, config);

		dispatch({
			type: GET_TICKET_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_TICKET_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const editTicket = (
	title,
	description,
	developer,
	project,
	priority,
	status,
	id,
) => async (dispatch, getState) => {
	try {
		dispatch({ type: EDIT_TICKET_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.put(
			`tickets/${id}`,
			{
				title,
				description,
				developer,
				project,
				priority,
				status,
				id,
			},
			config,
		);

		dispatch({
			type: EDIT_TICKET_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: EDIT_TICKET_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
