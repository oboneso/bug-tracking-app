import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAlert, showWidgetItem } from 'store/actions/navigationActions';
import { deleteTicket } from 'store/actions/ticketActions';
import {
	DELETE_TICKET_RESET,
	EDIT_TICKET_RESET,
	GET_TICKET_RESET,
	SET_EDITING_FALSE,
	SINGLE_TICKET_ID_RESET,
} from 'store/types';
import style from './deleteTicket.module.css';

const DeleteTicket = () => {
	const dispatch = useDispatch();
	const { ticketId } = useSelector((state) => state.id);
	const { isDeleted } = useSelector((state) => state.ticketDeleted);

	const deleteButtonClickHandler = () => {
		dispatch(deleteTicket(ticketId));
	};

	useEffect(() => {
		if (isDeleted) {
			try {
				dispatch({ type: SET_EDITING_FALSE });
				dispatch({ type: EDIT_TICKET_RESET });
				dispatch({ type: GET_TICKET_RESET });
				dispatch({ type: SINGLE_TICKET_ID_RESET });
				dispatch(showWidgetItem('tickets'));
				dispatch(createAlert('success', 'Ticket successfully deleted'));
				dispatch({ type: DELETE_TICKET_RESET });
			} catch (err) {
				console.log(`error: ${error}`);
			}
		}
	}, [isDeleted, dispatch]);
	return (
		<div className={style.deleteTicketWrapper}>
			Are you sure you want to delete?
			<div className={style.buttonWrapper}>
				<button
					onClick={() => deleteButtonClickHandler()}
					className={style.singleButton}>
					Delete
				</button>
				<button
					style={{ background: 'rgb(111, 199, 111)', color: 'white' }}
					className={style.singleButton}>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default DeleteTicket;
