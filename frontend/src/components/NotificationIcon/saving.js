import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Icons
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Redux actions
import { getUsers } from 'store/actions/userActions';
import { getTickets } from 'store/actions/ticketActions';
import { getProjects } from 'store/actions/projectActions';
import { modalStatusAction } from 'store/actions/navigationActions';

import style from './roundButton.module.css';

const RoundButton = ({
	currentCard = { color: 'white', modal: 'createTicket', title: 'tickets' },
	myTickets,
	ugh,
}) => {
	const dispatch = useDispatch();

	// Current card properties.  Modal object sends createNew info to a modal component
	const { color, modal, title } = currentCard;

	const data = useSelector((state) => getData(title, state));

	useEffect(() => {
		if (title === 'tickets' || myTickets === 'tickets') {
			dispatch(getTickets());
		}
	}, [dispatch]);

	useEffect(() => {
		if (title === 'projects') {
			dispatch(getProjects());
		}
	}, [dispatch]);

	useEffect(() => {
		if (title === 'users') {
			dispatch(getUsers());
		}
	}, [dispatch]);

	if (data.error) {
		// TODO - send error to new log API
		console.log(`Error from RoundButton component ${data.error}`);
	}

	return (
		<div style={({ background: color }, ugh)} className={style.largeButton}>
			{data.loading ? (
				<h6>Loading...</h6>
			) : data.error ? (
				<h6>Oops! Something went wrong, click here to fix.</h6>
			) : data.tickets ? (
				<h6>{data.tickets.length}</h6>
			) : data.users ? (
				<h6>{data.users.length}</h6>
			) : data.projects ? (
				<h6>{data.projects.length}</h6>
			) : (
				<h6>Waiting for something great</h6>
			)}
		</div>
	);
};

export default RoundButton;
// <FontAwesomeIcon
// 	onClick={() => dispatch(modalStatusAction(true, modal))}
// 	className={style.addIcon}
// 	icon={faPlus}
// />;
