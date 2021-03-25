// Packages
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import {
	PAGE_ONE,
	DELETE_FORM_DATA,
	SELECTED_PROJECT_RESET,
	TICKET_TYPE_RESET,
} from 'store/types';
import { modalStatusAction } from 'store/actions/navigationActions';

// Modal views
import DeleteTicket from 'views/MyTicketsPage/DeleteTicket';
import CreateTicketPage from 'views/MyTicketsPage/CreateTicketPage';
import CreateProjectPage from 'views/MyProjectsPage/CreateProjectPage';
import EditAvatar from 'components/EditAvatar';

// Icons
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// CSS
import style from './modal.module.css';

const Modal = () => {
	// Package methods
	const dispatch = useDispatch();

	// Global state
	const { open, component } = useSelector((state) => state.modalStatus);

	// Local state
	const [isModalOpen, setIsModalOpen] = useState(open);

	// when x close button is clicked, reset local and global states
	const closeModalClickHandler = () => {
		setIsModalOpen(false);
		dispatch({ type: SELECTED_PROJECT_RESET });
		dispatch({ type: DELETE_FORM_DATA });
		dispatch({ type: TICKET_TYPE_RESET });
		dispatch({ type: PAGE_ONE });
		dispatch(modalStatusAction(false, ''));
	};

	useEffect(() => {
		if (component === 'clear') {
			clickHandler();
		}
		if (open) {
			setIsModalOpen(true);
		}
		if (!open) {
			setIsModalOpen(false);
		}
	}, [open, component]);

	return (
		<div className={isModalOpen ? style.modalContainer : style.none}>
			<div className={style.modalContentContainer}>
				<div
					onClick={() => closeModalClickHandler()}
					className={style.closeButtonContainer}>
					<div className={style.closeButton}>X</div>
				</div>

				<div className={style.modalContent}>
					{component === 'createTicket' ? (
						<CreateTicketPage />
					) : component === 'createProject' ? (
						<CreateProjectPage />
					) : component === 'editProfile' ? (
						<EditProfile />
					) : component === 'editAvatar' ? (
						<EditAvatar />
					) : component === 'deleteTicket' ? (
						<DeleteTicket />
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Modal;
