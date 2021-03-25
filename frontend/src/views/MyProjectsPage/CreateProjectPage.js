// Packages
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { showComponent } from 'store/actions/navigationActions';
import { createProject, getProjects } from '../../store/actions/projectActions';
import { CREATE_PROJECT_RESET } from '../../store/types';

// Components
import Loader from '../../components/Loader';
import Message from '../../components/Message';

// Css
import style from './MyProjectsPage.module.css';

const CreateProjectPage = () => {
	// Package methods
	const dispatch = useDispatch();

	// Local State
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	// Global state
	const { userInfo } = useSelector((state) => state.userLogin);

	// Controlled input functions
	const handleTitle = (event) => setTitle(event.target.value);
	const handleDescription = (event) => setDescription(event.target.value);

	// form submit function to create a project
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(createProject(title, description, userInfo._id));
	};

	const project = useSelector((state) => state.project);
	const {
		loading: loadingCreate,
		success: successCreate,
		error: errorCreate,
	} = project;

	useEffect(() => {
		if (successCreate) {
			dispatch({ type: CREATE_PROJECT_RESET });
			dispatch(getProjects());
			dispatch(showComponent('My Projects'));
		}
	}, [dispatch, successCreate]);

	return (
		<div>
			<div className={style.header}>
				<h4 className={style.headerTitle}>Create New Project</h4>
			</div>
			{loadingCreate ? (
				<Loader />
			) : errorCreate ? (
				<Message variant='danger'>{errorCreate}</Message>
			) : (
				<form onSubmit={(event) => handleSubmit(event)}>
					<div className={style.formFields}>
						<div className={style.inputContainer}>
							<label className={style.inputLabel}>
								Project Name:
							</label>
							<input
								value={title}
								className={style.inputBox}
								type='text'
								onChange={(event) => handleTitle(event)}
							/>
						</div>
						<div className={style.inputContainer}>
							<label className={style.inputLabel}>
								Project Description:
							</label>
							<input
								value={description}
								className={style.inputBox}
								type='text'
								onChange={(event) => handleDescription(event)}
							/>
						</div>
					</div>
					<input type='submit' value='submit' />
				</form>
			)}
		</div>
	);
};

export default CreateProjectPage;
