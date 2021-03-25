// Packages
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { CREATE_TICKET_RESET } from 'store/types';
import { createTicket } from 'store/actions/ticketActions';
import {
	createAlert,
	modalStatusAction,
	showComponent,
} from 'store/actions/navigationActions';
import { getUsers } from 'store/actions/userActions';

// Styles ~ css
import style from '../CreateTicketPage.module.css';

export const Form = () => {
	const dispatch = useDispatch();

	const [title, setTitle] = useState('');
	const [status, setStatus] = useState('');
	const [project, setProject] = useState('');
	const [priority, setPriority] = useState('');
	const [developer, setDeveloper] = useState('');
	const [description, setDescription] = useState('');

	const { users, loading, error } = useSelector((state) => state.users);
	const { projects } = useSelector((state) => state.projects);
	const { userInfo } = useSelector((state) => state.userLogin);
	const { loadingCreate, errorCreate, successCreate } = useSelector(
		(state) => state.ticketCreate,
	);

	// Modal status determines which version of createTicket to return
	const { open } = useSelector((state) => state.modalStatus);

	const submitHandler = (event) => {
		event.preventDefault();
		dispatch(createAlert('caution', 'Verifying ticket information...'));

		dispatch(
			createTicket(
				title,
				description,
				status,
				developer,
				priority,
				project,
				userInfo,
			),
		);
		dispatch(showComponent('home'));
	};

	useEffect(() => {
		if (!users) {
			dispatch(getUsers());
		}

		if (successCreate) {
			dispatch(modalStatusAction(false, 'clear'));
			dispatch(createAlert('success', 'Ticket was created successfully'));
			dispatch({ type: CREATE_TICKET_RESET });
			dispatch(showComponent('My Tickets'));
		}
	}, [dispatch, successCreate, users]);
	return (
		<div
			className={
				open
					? style.createTicketContainerModal
					: style.createTicketContainer
			}>
			<form onSubmit={(event) => submitHandler(event)}>
				{loadingCreate ? 'loading...' : null}
				{errorCreate ? 'error' : null}
				<div className={style.formGrid}>
					<div className={style.labelColumn}>
						<label className={style.label}>Title</label>
						<label className={style.label}>Description</label>
						<label className={style.label}>Assigned To</label>
						<label className={style.label}>Project</label>
						<label className={style.label}>Priority</label>
						<label className={style.label}>Status</label>
						<label className={style.label}>Submitted By</label>
					</div>
					<div className={style.dataColumn}>
						<input
							className={style.titleInput}
							type='text'
							onChange={(event) => setTitle(event.target.value)}
							value={title}
						/>
						<input
							className={style.descriptionInput}
							type='text'
							onChange={(event) =>
								setDescription(event.target.value)
							}
							value={description}
						/>
						{loading ? (
							<h3>loading...</h3>
						) : error ? (
							<h3>{error}</h3>
						) : users ? (
							<select
								required
								className={style.developerSelect}
								onChange={(event) =>
									setDeveloper(event.target.value)
								}>
								<option></option>
								{users.map((developer) => (
									<option key={developer.name}>
										{developer.name}
									</option>
								))}
							</select>
						) : (
							<h6>Waiting for something amazing</h6>
						)}
						<select
							required
							className={style.projectSelect}
							type='text'
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
						<select
							required
							className={style.prioritySelect}
							type='text'
							onChange={(event) =>
								setPriority(event.target.value)
							}>
							<option></option>
							<option value='normal'>Normal</option>
							<option value='urgent'>Urgent</option>
							<option value='test'>Test</option>
						</select>
						<select
							required
							className={style.statusSelect}
							type='text'
							onChange={(event) => setStatus(event.target.value)}>
							<option></option>
							<option value='open'>Open</option>
							<option value='closed'>Closed</option>
							<option value='test'>Test</option>
						</select>
						<input
							className={style.submittedByInput}
							type='text'
							value={userInfo.name}
							readOnly
						/>
						<input
							className={style.inputSubmit}
							type='submit'
							value='Submit'
						/>
					</div>
				</div>
			</form>
		</div>
	);
};
