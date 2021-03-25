import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	deleteTicket,
	editTicket,
	getTicket,
} from 'store/actions/ticketActions';
import { createAlert, showWidgetItem } from 'store/actions/navigationActions';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './EditTicketPage.module.css';
import {
	EDIT_TICKET_RESET,
	GET_TICKET_RESET,
	SET_EDITING_FALSE,
	SINGLE_TICKET_ID_RESET,
} from 'store/types';
import { DELETE_TICKET_RESET } from 'store/types';

const EditTicket = () => {
	const dispatch = useDispatch();

	const { ticket } = useSelector((state) => state.id);

	const { singleTicket, loading, error } = useSelector(
		(state) => state.singleTicket,
	);

	useEffect(() => {
		if (ticket) {
			dispatch(getTicket(ticket));
		}
	}, [dispatch, ticket]);

	const formSubmitHandler = () => {
		console.log('hello');
	};

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState();
	const [status, setStatus] = useState('');
	const [developer, setDeveloper] = useState('');
	const [priority, setPriority] = useState('');
	const [project, setProject] = useState('');

	const { users } = useSelector((state) => state.users);
	const { projects } = useSelector((state) => state.projects);
	const { success } = useSelector((state) => state.editedTicket);

	const submitHandler = (event) => {
		event.preventDefault();
		const id = singleTicket._id;
		dispatch(
			editTicket(
				title,
				description,
				developer,
				project,
				priority,
				status,
				id,
			),
		);
	};

	const deleteHandler = () => {
		const id = singleTicket._id;
		dispatch(deleteTicket(id));
	};

	const cancelHandler = () => {
		dispatch(showWidgetItem('ticket'));
		dispatch({ type: SET_EDITING_FALSE });
		dispatch({ type: EDIT_TICKET_RESET });
	};

	useEffect(() => {
		if (success) {
			dispatch(showWidgetItem('ticket'));
			dispatch({ type: SET_EDITING_FALSE });
			setTimeout(() => {
				dispatch({ type: EDIT_TICKET_RESET });
			}, 3000);
		}
	}, [success, dispatch]);

	return (
		<div className={style.main}>
			{loading ? (
				<h6>Loading...</h6>
			) : error ? (
				<h6>{error}</h6>
			) : singleTicket ? (
				<>
					<div className={style.titleContainer}>
						<h6 className={style.title}>
							Editing Ticket id: {singleTicket._id}
						</h6>
					</div>
					<form onSubmit={(event) => submitHandler(event)}>
						<div className={style.dataFieldContainer}>
							<label className={style.label}>Title:</label>
							<input
								required
								className={style.dataField}
								type='text'
								value={!title ? singleTicket.title : title}
								placeholder={singleTicket.title}
								onChange={(event) =>
									setTitle(event.target.value)
								}
							/>
						</div>

						<div className={style.dataFieldContainer}>
							<label className={style.label}>Description:</label>
							<input
								className={style.dataField}
								type='text'
								value={
									!description
										? singleTicket.description
										: description
								}
								placeholder={singleTicket.description}
								onChange={(event) =>
									setDescription(event.target.value)
								}
							/>
						</div>

						<div className={style.dataFieldContainer}>
							<label className={style.label}>Assigned To:</label>
							{users ? (
								<select
									required
									value={
										!developer
											? singleTicket.assignedTo
											: developer
									}
									className={style.dataField}
									onChange={(event) =>
										setDeveloper(event.target.value)
									}>
									<option></option>
									{users.map((developer) => (
										<option key={developer._id}>
											{developer.name}
										</option>
									))}
								</select>
							) : (
								'loading...'
							)}
						</div>

						<div className={style.dataFieldContainer}>
							<label className={style.label}>Project:</label>
							{projects ? (
								<select
									required
									value={
										!project
											? singleTicket.project
											: project
									}
									className={style.dataField}
									onChange={(event) =>
										setProject(event.target.value)
									}>
									<option></option>
									{projects.map((project) => (
										<option key={project._id}>
											{project.title}
										</option>
									))}
								</select>
							) : (
								'loading...'
							)}
						</div>

						<div className={style.dataFieldContainer}>
							<label className={style.label}>Priority:</label>
							<select
								required
								className={style.dataField}
								type='text'
								value={
									!priority ? singleTicket.priority : priority
								}
								onChange={(event) =>
									setPriority(event.target.value)
								}>
								<option value={singleTicket.priority}>
									{singleTicket.priority}
								</option>
								<option></option>
								<option value='normal'>Normal</option>
								<option value='urgent'>Urgent</option>
								<option value='test'>Test</option>
							</select>
						</div>
						<div className={style.dataFieldContainer}>
							<label className={style.label}>Status:</label>

							<select
								required
								value={!status ? singleTicket.status : status}
								className={style.statusSelect}
								type='text'
								onChange={(event) =>
									setStatus(event.target.value)
								}>
								<option></option>
								<option value='open'>Open</option>
								<option value='closed'>Closed</option>
								<option value='test'>Test</option>
							</select>
						</div>
						<div className={style.buttonContainer}>
							<button
								type='submit'
								style={{ background: 'green' }}
								className={style.headButton}
								onClick={() => formSubmitHandler()}>
								Submit
							</button>
							<button
								type='button'
								onClick={() => cancelHandler()}
								style={{ background: 'orange' }}
								className={style.headButton}>
								<FontAwesomeIcon
									icon={faTrashAlt}
									className={style.icon}
								/>
								cancel
							</button>
						</div>
					</form>
				</>
			) : null}
		</div>
	);
};

export default EditTicket;
