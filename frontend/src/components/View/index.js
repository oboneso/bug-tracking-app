import React from 'react';
import { useSelector } from 'react-redux';

import Home from 'views/DashBoardHome';
import SignOut from 'views/SignOut';
import Users from 'views/Users';
import ProfilePage from 'views/private/ProfilePage';
import CreateTicketPage from 'views/MyTicketsPage/CreateTicketPage';
import CreateProjectPage from 'views/MyProjectsPage/CreateProjectPage';
import MyTicketsPage from 'views/MyTicketsPage';
import MyProjectsPage from 'views/MyProjectsPage';
import SingleTicket from 'views/MyTicketsPage/SingleTicket';

const View = () => {
	// get which component to show on the dashboard from global state
	const { component } = useSelector((state) => state.component);

	return (
		<>
			{component === 'home' ? (
				<Home />
			) : component === 'Users' ? (
				<Users />
			) : component === 'My Profile' ? (
				<ProfilePage />
			) : component === 'My Tickets' ? (
				<MyTicketsPage />
			) : component === 'Create Ticket' ? (
				<CreateTicketPage />
			) : component === 'My Projects' ? (
				<MyProjectsPage />
			) : component === 'Create Project' ? (
				<CreateProjectPage />
			) : component === 'singleTicket' ? (
				<SingleTicket />
			) : component === 'Signout' ? (
				<SignOut />
			) : component === 'createTicket' ? (
				<CreateTicketPage />
			) : null}
		</>
	);
};

export default View;
