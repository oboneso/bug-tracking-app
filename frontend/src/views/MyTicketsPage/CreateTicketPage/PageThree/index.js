// Packages
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from 'store/actions/projectActions';
import {
	PAGE_ONE,
	PAGE_TWO,
	SAVE_FORM_DATA,
	DELETE_FORM_DATA,
	PAGE_THREE,
	SELECTED_PROJECT_RESET,
	TICKET_TYPE_RESET,
} from 'store/types';

import { featureExample, bugExample } from './placeholderData';

// Styles ~ css
import style from './pageThree.module.css';
import { createTicket } from 'store/actions/ticketActions';
import {
	createAlert,
	modalStatusAction,
} from 'store/actions/navigationActions';

const PageThree = () => {
	const dispatch = useDispatch();

	// If there is any current formData, retrieve it from global state for input values
	const { title, description } = useSelector((state) => state.formData);

	// Local formData for controlled inputs
	const [localTitle, setLocalTitle] = useState(title);
	const [localDescription, setLocalDescription] = useState(description);

	// Modal status determines which version of createTicket to return
	const { open } = useSelector((state) => state.modalStatus);

	// Which project user has selected in step 2 is saved to global state
	const selectedProject = useSelector((state) => state.selectedProject);

	// Which type of ticket user selected in step one
	const { ticketType } = useSelector((state) => state.buildForm);

	const { userInfo } = useSelector((state) => state.userLogin);

	const { projects } = useSelector((state) => state.projects);

	const saveFormInfo = () => {
		dispatch({
			type: SAVE_FORM_DATA,
			payload: { title: localTitle, description: localDescription },
		});
	};

	useEffect(() => {
		if (!projects) {
			dispatch(getProjects());
		}
	}, [dispatch]);

	const previousClickHandler = () => {
		saveFormInfo();
		dispatch({ type: PAGE_TWO });
	};

	const nextClickHandler = () => {
		saveFormInfo();
		dispatch({ type: PAGE_THREE });
	};

	const descriptionChangeHander = (e) => {
		setLocalDescription(e);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		// createTicket
		dispatch(
			createTicket(
				ticketType,
				localTitle,
				localDescription,
				'open',
				'admin',
				'normal',
				selectedProject,
				userInfo,
			),
		);
		// Close modal and reset all createTicket global references
		dispatch(modalStatusAction(false, ''));
		dispatch({ type: SELECTED_PROJECT_RESET });
		dispatch({ type: DELETE_FORM_DATA });
		dispatch({ type: TICKET_TYPE_RESET });
		dispatch({ type: PAGE_ONE });
	};

	return (
		<div
			className={
				open ? style.createTicketContainerModal : style.createTicketContainer
			}>
			<div className={style.headerContainer}>
				{ticketType === 'bug' ? (
					<h6 className={style.headerTitle}>
						Report A Bug for {selectedProject}
					</h6>
				) : ticketType === 'feature' ? (
					<h6 className={style.headerTitle}>
						Request A Feature {selectedProject}
					</h6>
				) : null}
			</div>
			<div className={style.pageTwoContainer}>
				<form onSubmit={(event) => submitHandler(event)}>
					<div className={style.box}>
						<label className={style.titleLabel}>Title:{'  '}</label>
						<input
							required
							type='text'
							value={localTitle}
							placeholder={
								ticketType === 'bug' ? bugExample.title : featureExample.title
							}
							className={style.titleInput}
							onChange={(event) => setLocalTitle(event.target.value)}
						/>
					</div>
					<div className={style.box}>
						<label className={style.titleLabel}>Description</label>
						<textarea
							required
							type='text'
							rows='6'
							cols='50'
							value={localDescription}
							placeholder={
								ticketType === 'bug'
									? bugExample.description
									: featureExample.description
							}
							className={style.descriptionTextarea}
							onChange={(event) => descriptionChangeHander(event.target.value)}
						/>
					</div>

					{!localTitle || !localDescription ? null : localTitle.length < 5 ||
					  localDescription.length < 10 ? null : (
						<div className={style.buttonContainer}>
							<button
								type='button'
								onClick={() => previousClickHandler()}
								className={style.nextButton}>
								PREVIOUS
							</button>
							<button type='submit' className={style.nextButton}>
								submit
							</button>
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default PageThree;
