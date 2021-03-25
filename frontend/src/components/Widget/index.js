import React from 'react';
import { useSelector } from 'react-redux';

// Views
import MyTicketsPage from 'views/MyTicketsPage';
import MyProjectsPage from 'views/MyProjectsPage';
import EditTicket from 'views/MyTicketsPage/EditTicketPage';
import SingleTicket from 'views/MyTicketsPage/SingleTicket';
import UsersList from 'views/Users/UsersList';

// Css
import style from './widget.module.css';

const Widget = () => {
	const { component } = useSelector((state) => state.widgetView);

	return (
		<div className={style.homeBody}>
			<div className={style.homeBodyHeader}>
				<div className={style.headerText}>
					{component ? component.toUpperCase() : null}
				</div>
			</div>
			<div className={style.homeBodyContent}>
				{component === 'tickets' ? (
					<MyTicketsPage />
				) : component === 'projects' ? (
					<MyProjectsPage />
				) : component === 'ticket' ? (
					<SingleTicket />
				) : component === 'editTicket' ? (
					<EditTicket />
				) : component === 'users' ? (
					<UsersList />
				) : null}
			</div>
		</div>
	);
};

export default Widget;
