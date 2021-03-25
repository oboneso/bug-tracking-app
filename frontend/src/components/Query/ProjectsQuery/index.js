import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from 'store/actions/projectActions';

const ProjectsQuery = (props) => {
	const dispatch = useDispatch();

	const { projects, loading, error } = useSelector((state) => state.projects);

	useEffect(() => {
		dispatch(getProjects());
	}, [dispatch]);
	return (
		<>
			{loading ? (
				<h6>loading...</h6>
			) : error ? (
				<h6>{error}</h6>
			) : projects ? (
				<></>
			) : (
				<h6>Waiting for some great things</h6>
			)}
		</>
	);
};

export default ProjectsQuery;
