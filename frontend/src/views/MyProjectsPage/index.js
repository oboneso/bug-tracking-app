/** @format */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'react-moment';

// Icons
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Material-Ui

// Redux store ~ actions
import { getProjects } from 'store/actions/projectActions';
import { deleteProjectAction } from 'store/actions/projectActions';
// CSS ~ styles
import style from './MyProjectsPage.module.css';

const MyProjectsPage = () => {
	const dispatch = useDispatch();
	const { projects } = useSelector((state) => state.projects);

	const projectDelete = useSelector((state) => state.projectDelete);

	const deleteHandler = (id) => {
		if (window.confirm('Are you sure?')) {
			dispatch(deleteProjectAction(id));
		}
	};

	useEffect(() => {
		dispatch(getProjects());
	}, [dispatch, projectDelete]);

	return (
		<div className={style.tableContainer}>
			<div className={style.projectTable}>
				<div className={style.row}>
					<div
						style={{ paddingLeft: '10px' }}
						className={style.tableHeader}>
						-
					</div>
					<div className={style.tableHeader}>Title</div>
					<div className={style.tableHeader}>Project</div>
					<div className={style.tableHeader}>Status</div>
					<div
						style={{
							textAlign: 'center',
						}}
						className={style.tableHeader}>
						Date
					</div>
					<div
						style={{
							textAlign: 'center',
						}}
						className={style.tableHeader}>
						More...
					</div>
				</div>

				{projects.map((project, index) => (
					<div className={style.row} key={project._id}>
						<div
							style={{ paddingLeft: '10px' }}
							className={style.tableCell}>{`${index + 1}.`}</div>
						<div className={style.tableCell}>{project.title}</div>
						<div className={style.tableCell}>
							{project.description}
						</div>
						<div className={style.tableCell}>Active</div>
						<div
							style={{ textAlign: 'center' }}
							className={style.tableCell}>
							<Moment format='MMM-DD'>{project.createdAt}</Moment>
						</div>
						<div className={style.tableCell}>
							<FontAwesomeIcon
								className={style.editIcon}
								icon={faEdit}
							/>
							<FontAwesomeIcon
								onClick={() => deleteHandler(project._id)}
								className={style.trashIcon}
								icon={faTrashAlt}
							/>
						</div>
					</div>
				))}
			</div>
			<button
				className={style.createTicketButton}
				onClick={() => dispatch(showComponent('createTicket'))}>
				Create Ticket
			</button>
		</div>
	);
};

export default MyProjectsPage;
