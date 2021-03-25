import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from 'components/Card';
import CardTitle from 'components/Card/CardTitle';
import NotificationIcon from 'components/NotificationIcon';
import { Icon, faArrowRight, faPlus } from 'components/Icon';

import { getProjects } from 'store/actions/projectActions';
import { createAlert } from 'store/actions/navigationActions';

import style from './dashboard_home.module.css';

const ProjectsCard = () => {
	const dispatch = useDispatch();

	const [localProjects, setLocalProjects] = useState('loading...');
	const { projects, loading, error } = useSelector((state) => state.projects);

	if (!(projects === localProjects) && projects) {
		setLocalProjects(projects);
	}

	useEffect(() => {
		try {
			if (projects || loading) {
				return;
			} else {
				dispatch(getProjects());
			}
		} catch (error) {
			dispatch(createAlert(error, 'error'));
		}
	}, []);
	return (
		<>
			{projects ? (
				<Card>
					<div className={style.cardContentWrapper}>
						<div className={style.cardHeader}>
							<CardTitle>{'My Projects'}</CardTitle>

							<NotificationIcon
								styles={{
									fontSize: '36px',
									height: 'auto',
								}}>
								{projects.length}
							</NotificationIcon>
						</div>
						<div className={style.cardBody}>
							<NotificationIcon dashed={true}>
								<Icon type={faPlus} />
							</NotificationIcon>
							<NotificationIcon>
								<Icon type={faArrowRight} />
							</NotificationIcon>
						</div>
					</div>
				</Card>
			) : (
				<h6>loading...</h6>
			)}
		</>
	);
};

export default ProjectsCard;
