import React from 'react';

import Widget from 'components/Widget';
import UsersCard from './UsersCard';
import TicketsCard from 'views/DashBoardHome/TicketsCard';
import ProjectsCard from 'views/DashBoardHome/ProjectsCard';

import style from './dashboard_home.module.css';

const DashBoardHome = () => {
	return (
		<>
			<div className={style.topButtons}>
				<div className={style.cardWrapper}>
					<TicketsCard clasName={style.ticketsCard} />
				</div>
				<div className={style.cardWrapper}>
					<ProjectsCard />
				</div>
				<div className={style.cardWrapper}>
					<UsersCard />
				</div>
			</div>
			<div className={style.contentBody}>
				<Widget />
			</div>
		</>
	);
};

export default DashBoardHome;
