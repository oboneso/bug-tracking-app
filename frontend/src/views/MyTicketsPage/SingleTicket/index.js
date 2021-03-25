// Packages
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	EDIT_TICKET_REQUEST,
	GET_TICKET_RESET,
	SET_EDITING_TRUE,
	SET_MODAL_STATUS,
	SINGLE_TICKET_ID_RESET,
} from 'store/types';

// Components
import TicketData from './TicketData';
import Comment from 'components/Comment';
import EditTicket from '../EditTicketPage';
import DeleteTicket from '../DeleteTicket';

// Icons
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Actions
import {
	modalStatusAction,
	showWidgetItem,
} from 'store/actions/navigationActions';

// Styles
import style from './SingleTicket.module.css';

// Component
const SingleTicket = () => {
	const dispatch = useDispatch();

	const [view, setView] = useState('ticket');

	// const editTicketHandler = () => {
	// 	dispatch(showWidgetItem('editTicket'));
	// 	dispatch({ type: SET_EDITING_TRUE });
	// 	dispatch({ type: EDIT_TICKET_REQUEST });
	// };

	const backToAllTicketsHandler = () => {
		dispatch({ type: SINGLE_TICKET_ID_RESET });
		dispatch({ type: GET_TICKET_RESET });
		dispatch(showWidgetItem('tickets'));
	};

	const commentsClickHandler = () => [console.log('hello')];

	return (
		<>
			<div className={style.main}>
				<div className={style.buttonContainer}>
					<div onClick={() => setView('ticket')} className={style.headButton}>
						<FontAwesomeIcon className={style.icon} icon={faEdit} />
						Ticket
					</div>
					<div onClick={() => setView('edit')} className={style.headButton}>
						<FontAwesomeIcon className={style.icon} icon={faEdit} />
						Edit
					</div>
					<div onClick={() => setView('comments')} className={style.headButton}>
						<FontAwesomeIcon className={style.icon} icon={faEdit} />
						Comments
					</div>
					<div onClick={() => setView('delete')} className={style.headButton}>
						<FontAwesomeIcon className={style.icon} icon={faEdit} />
						Delete
					</div>
					<div
						className={style.headButton}
						onClick={() => backToAllTicketsHandler('back')}>
						All Tickets
					</div>
				</div>
				{view === 'ticket' ? (
					<TicketData />
				) : view === 'comments' ? (
					<Comment />
				) : view === 'edit' ? (
					<EditTicket />
				) : view === 'delete' ? (
					<DeleteTicket />
				) : null}
			</div>
		</>
	);
};

export default SingleTicket;
