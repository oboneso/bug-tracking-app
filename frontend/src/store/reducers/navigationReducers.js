/** @format */

import {
	NAVIGATION_SHOW_COMPONENT_FAIL,
	NAVIGATION_SHOW_COMPONENT_SUCCESS,
	NAVIGATION_SHOW_COMPONENT_REQUEST,
	NAVIGATION_SIDEBAR_STATUS,
	SET_MODAL_STATUS,
	SET_EDITING_TRUE,
	SET_EDITING_FALSE,
	SHOW_WIDGET_VIEW,
	CREATE_ALERT,
	DELETE_ALERT,
	PROFILE_NAV_KEY,
} from '../types';

export const navigationShowComponentReducer = (
	state = { component: 'home' },
	action,
) => {
	switch (action.type) {
		case NAVIGATION_SHOW_COMPONENT_REQUEST:
			return { loading: true };
		case NAVIGATION_SHOW_COMPONENT_SUCCESS:
			return { loading: false, component: action.payload };
		case NAVIGATION_SHOW_COMPONENT_FAIL:
			return { loading: false, component: action.payload };
		default:
			return state;
	}
};

export const sidebarStatusReducer = (state = { status: false }, action) => {
	switch (action.type) {
		case NAVIGATION_SIDEBAR_STATUS:
			return action.payload;
		default:
			return state;
	}
};
export const modalStatusReducer = (state = false, action) => {
	switch (action.type) {
		case SET_MODAL_STATUS:
			return action.payload;
		default:
			return state;
	}
};

export const setEditingStatusReducer = (state = {}, action) => {
	switch (action.type) {
		case SET_EDITING_TRUE:
			return { isEditing: action.payload };
		case SET_EDITING_FALSE:
			return {};
		default:
			return state;
	}
};

export const showWidgetItemReducer = (state = {}, action) => {
	switch (action.type) {
		case SHOW_WIDGET_VIEW:
			return { component: action.payload };
		default:
			return state;
	}
};

export const createAlertReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_ALERT:
			return action.payload;
		case DELETE_ALERT:
			return {};
		default:
			return state;
	}
};

export const profileNavKeyReducer = (state = 'profile', action) => {
	switch (action.type) {
		case PROFILE_NAV_KEY:
			return action.payload;

		default:
			return state;
	}
};
