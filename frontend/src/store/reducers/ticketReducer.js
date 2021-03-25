/** @format */

import {
	GET_TICKETS_FAIL,
	GET_TICKETS_SUCCESS,
	GET_TICKETS_REQUEST,
	CREATE_TICKET_REQUEST,
	CREATE_TICKET_SUCCESS,
	CREATE_TICKET_FAIL,
	CREATE_TICKET_RESET,
	SINGLE_TICKET_ID_REQUEST,
	SINGLE_TICKET_ID_SUCCESS,
	SINGLE_TICKET_ID_FAIL,
	SINGLE_TICKET_ID_RESET,
	DELETE_TICKET_REQUEST,
	DELETE_TICKET_SUCCESS,
	DELETE_TICKET_FAIL,
	DELETE_TICKET_RESET,
	TICKET_COMMENT_REQUEST,
	TICKET_COMMENT_SUCCESS,
	TICKET_COMMENT_FAIL,
	TICKET_COMMENT_RESET,
	GET_TICKET_REQUEST,
	GET_TICKET_SUCCESS,
	GET_TICKET_FAIL,
	EDIT_TICKET_REQUEST,
	EDIT_TICKET_SUCCESS,
	EDIT_TICKET_FAIL,
	EDIT_TICKET_RESET,
	REPORT_A_BUG,
	REQUEST_A_FEATURE,
	TICKET_TYPE_RESET,
	PAGE_ONE,
	PAGE_TWO,
	SAVE_FORM_DATA,
	DELETE_FORM_DATA,
	PAGE_THREE,
	SELECTED_PROJECT,
	SELECTED_PROJECT_RESET,
	GET_TICKET_RESET,
} from 'store/types';

export const getTicketsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_TICKETS_REQUEST:
			return { loading: true };
		case GET_TICKETS_SUCCESS:
			return { loading: false, tickets: action.payload };
		case GET_TICKETS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const createTicketReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_TICKET_REQUEST:
			return { loadingCreate: true };
		case CREATE_TICKET_SUCCESS:
			return {
				loadingCreate: false,
				successCreate: true,
				ticketCreate: action.payload,
			};
		case CREATE_TICKET_FAIL:
			return { loadingCreate: false, errorCreate: action.payload };
		case CREATE_TICKET_RESET:
			return {};
		default:
			return state;
	}
};

export const singleTicketIdReducer = (state = {}, action) => {
	switch (action.type) {
		case SINGLE_TICKET_ID_REQUEST:
			return { loading: true };
		case SINGLE_TICKET_ID_SUCCESS:
			return { loading: false, ticketId: action.payload };
		case SINGLE_TICKET_ID_FAIL:
			return { loading: false, error: action.payload };
		case SINGLE_TICKET_ID_RESET:
			return {};
		default:
			return state;
	}
};
export const deleteTicketReducer = (state = {}, action) => {
	switch (action.type) {
		case DELETE_TICKET_REQUEST:
			return { loading: true };
		case DELETE_TICKET_SUCCESS:
			return { loading: false, isDeleted: action.payload };
		case DELETE_TICKET_FAIL:
			return { loading: false, error: action.payload };
		case DELETE_TICKET_RESET:
			return {};
		default:
			return state;
	}
};

export const ticketCommentReducer = (state = {}, action) => {
	switch (action.type) {
		case TICKET_COMMENT_REQUEST:
			return { commentLoading: true };
		case TICKET_COMMENT_SUCCESS:
			return {
				commentLoading: false,
				commentSuccess: true,
			};
		case TICKET_COMMENT_FAIL:
			return { commentLoading: false, commentError: action.payload };
		case TICKET_COMMENT_RESET:
			return {};
		default:
			return state;
	}
};

export const getTicketReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_TICKET_REQUEST:
			return { loading: true };
		case GET_TICKET_SUCCESS:
			return { loading: false, singleTicket: action.payload };
		case GET_TICKET_FAIL:
			return { loading: false, error: action.payload };
		case GET_TICKET_RESET:
			return {};
		default:
			return state;
	}
};

export const editTicketReducer = (state = { success: false }, action) => {
	switch (action.type) {
		case EDIT_TICKET_REQUEST:
			return { loading: true, success: false };
		case EDIT_TICKET_SUCCESS:
			return {
				loading: false,
				success: true,
				editedTicket: action.payload,
			};
		case EDIT_TICKET_FAIL:
			return { loading: false, error: action.payload };
		case EDIT_TICKET_RESET:
			return {};

		default:
			return state;
	}
};

export const buildFormReducer = (state = {}, action) => {
	switch (action.type) {
		case REPORT_A_BUG:
			return { ticketType: 'Bug Report' };
		case REQUEST_A_FEATURE:
			return {
				ticketType: 'Feature Request',
			};
		case TICKET_TYPE_RESET:
			return {
				ticketType: null,
			};

		default:
			return state;
	}
};

export const currentPageReducer = (state = 1, action) => {
	switch (action.type) {
		case PAGE_ONE:
			return 1;
		case PAGE_TWO:
			return 2;
		case PAGE_THREE:
			return 3;
		default:
			return state;
	}
};

export const formDataReducer = (state = {}, action) => {
	switch (action.type) {
		case SAVE_FORM_DATA:
			return action.payload;
		case DELETE_FORM_DATA:
			return {};
		default:
			return state;
	}
};

export const selectedProjectReducer = (state = false, action) => {
	switch (action.type) {
		case SELECTED_PROJECT:
			return action.payload;
		case SELECTED_PROJECT_RESET:
			return false;
		default:
			return state;
	}
};
