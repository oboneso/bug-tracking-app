/** @format */

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
	// SET_FEATURED_PROFILE_RESET,
} from '../types';

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return { loading: true };
		case USER_REGISTER_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_REGISTER_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return { loading: true };
		case USER_LOGIN_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_LOGIN_FAIL:
			return { loading: false, error: action.payload };
		case USER_LOGOUT:
			return {};
		default:
			return state;
	}
};

export const userDetailsReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_DETAILS_REQUEST:
			return { loading: true };
		case USER_DETAILS_SUCCESS:
			return { loading: false, success: true, user: action.payload };
		case USER_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		case USER_DETAILS_RESET:
			return { user: {} };
		default:
			return state;
	}
};

export const userUpdateProfileReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_UPDATE_PROFILE_REQUEST:
			return { ...state, loading: true };
		case USER_UPDATE_PROFILE_SUCCESS:
			return { loading: false, success: true, userInfo: action.payload };
		case USER_UPDATE_PROFILE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userListReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LIST_REQUEST:
			return { loading: true };
		case USER_LIST_SUCCESS:
			return { loading: false, success: true, users: action.payload };
		case USER_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const featuredUserReducer = (state = { featuredUser: {} }, action) => {
	switch (action.type) {
		case SET_FEATURED_PROFILE_REQUEST:
			return { loading: true };
		case SET_FEATURED_PROFILE_SUCCESS:
			return {
				loading: false,
				success: true,
				featuredUser: action.payload,
			};
		case SET_FEATURED_PROFILE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
