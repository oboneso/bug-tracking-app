// Packages
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from 'store/actions/projectActions';
import { PAGE_ONE, PAGE_TWO, PAGE_THREE, SELECTED_PROJECT } from 'store/types';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles ~ css
import style from './pageTwo.module.css';

const PageTwo = () => {
	const dispatch = useDispatch();

	const [selection, setSelection] = useState(false);
	console.log(
		`selection *********** ${JSON.stringify(selection)} *************`,
	);
	// Modal status determines which version of createTicket to return
	const { open } = useSelector((state) => state.modalStatus);
	const { ticketType } = useSelector((state) => state.buildForm);
	const selectedProject = useSelector((state) => state.selectedProject);
	const { projects, loading, error } = useSelector((state) => state.projects);

	const clickHandler = (project) => {
		setSelection(project);
		dispatch({
			type: SELECTED_PROJECT,
			payload: project,
		});
	};

	useEffect(() => {
		if (!projects) {
			dispatch(getProjects());
		}
	}, []);

	useEffect(() => {
		if (selectedProject) {
			setSelection(selectedProject);
		}
	}, []);

	return (
		<div
			className={
				open ? style.createTicketContainerModal : style.createTicketContainer
			}>
			<div className={style.headerContainer}>
				<h6 className={style.headerTitle}>Choose A Project</h6>
			</div>
			<div className={style.chooseTicketContainer}>
				{loading ? (
					<h6>loading...</h6>
				) : error ? (
					<h6>{error}</h6>
				) : projects ? (
					projects.map((project) => (
						<div key={project._id} className={style.container}>
							<div
								className={
									selection === project.title
										? style.active
										: style.chooseTicketColumn
								}
								onClick={() => clickHandler(project.title)}>
								{project.title}
								{selection === project.title ? (
									<FontAwesomeIcon
										className={style.icon}
										icon={faCheckCircle}></FontAwesomeIcon>
								) : null}
							</div>
						</div>
					))
				) : (
					<h6>waiting for some great things...</h6>
				)}
			</div>
			{selection ? (
				<div className={style.buttonContainer}>
					<button
						onClick={() => dispatch({ type: PAGE_ONE })}
						className={style.nextButton}>
						PREVIOUS
					</button>
					<button
						onClick={() => dispatch({ type: PAGE_THREE })}
						className={style.nextButton}>
						NEXT
					</button>
				</div>
			) : null}
		</div>
	);
};

export default PageTwo;
