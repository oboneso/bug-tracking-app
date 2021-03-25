/** @format */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	editTicketReducer,
	deleteTicketReducer,
	singleTicketIdReducer,
	createTicketReducer,
	getTicketsReducer,
	getTicketReducer,
	ticketCommentReducer,
	buildFormReducer,
	currentPageReducer,
	formDataReducer,
	selectedProjectReducer,
} from './reducers/ticketReducer';
import {
	modalStatusReducer,
	navigationShowComponentReducer,
	sidebarStatusReducer,
	setEditingStatusReducer,
	showWidgetItemReducer,
	createAlertReducer,
	profileNavKeyReducer,
} from './reducers/navigationReducers';
import { newLogReducer, getLogsReducer } from './reducers/logReducers';
import {
	createProjectReducer,
	getProjectsReducer,
	deleteProjectReducer,
} from './reducers/projectReducers';
import {
	userListReducer,
	userLoginReducer,
	userRegisterReducer,
	userDetailsReducer,
	userUpdateProfileReducer,
	featuredUserReducer,
} from './reducers/userReducers';
import {
	getPresignedURLReducer,
	sendImageToS3Reducer,
} from './reducers/uploadReducers';

const reducer = combineReducers({
	logs: getLogsReducer,
	modalStatus: modalStatusReducer,
	newLog: newLogReducer,
	users: userListReducer,
	projectDelete: deleteProjectReducer,
	project: createProjectReducer,
	projects: getProjectsReducer,
	status: sidebarStatusReducer,
	isEditing: setEditingStatusReducer,
	widgetView: showWidgetItemReducer,
	createAlert: createAlertReducer,
	component: navigationShowComponentReducer,
	profileKey: profileNavKeyReducer,
	id: singleTicketIdReducer,
	ticketCommentCreate: ticketCommentReducer,
	ticketDeleted: deleteTicketReducer,
	ticketCreate: createTicketReducer,
	tickets: getTicketsReducer,
	editedTicket: editTicketReducer,
	singleTicket: getTicketReducer,
	buildForm: buildFormReducer,
	formData: formDataReducer,
	currentPage: currentPageReducer,
	selectedProject: selectedProjectReducer,
	userLogin: userLoginReducer,
	featuredUser: featuredUserReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	uploadURL: getPresignedURLReducer,
	sendImageToS3: sendImageToS3Reducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
