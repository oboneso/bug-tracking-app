import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from 'components/Card';
import CardTitle from 'components/Card/CardTitle';
import NotificationIcon from 'components/NotificationIcon';
import { Icon, faArrowRight, faPlus } from 'components/Icon';

import { getTickets } from 'store/actions/ticketActions';
import {
	createAlert,
	modalStatusAction,
	showComponent,
} from 'store/actions/navigationActions';

import style from './dashboard_home.module.css';

const TicketsCard = () => {
	const dispatch = useDispatch();

	const [localTickets, setLocalTickets] = useState('loading...');
	const { tickets, loading, error } = useSelector((state) => state.tickets);
	if (!(tickets === localTickets) && tickets) {
		setLocalTickets(tickets);
	}

	useEffect(() => {
		try {
			if (tickets || loading) {
				return;
			} else {
				dispatch(getTickets());
			}
		} catch (error) {
			dispatch(createAlert(error, 'error'));
		}
	}, []);

	const arrowIconClickHandler = () => {
		console.log('clicked');
		dispatch(showComponent('My Tickets'));
	};

	const createNewTicketClickHandler = () => {
		dispatch(modalStatusAction(true, 'createTicket'));
	};

	return (
		<>
			{tickets ? (
				<Card>
					<div className={style.cardHeader}>
						<CardTitle>{'My Tickets'}</CardTitle>
						<NotificationIcon
							styles={{
								fontSize: '36px',
								height: 'auto',
							}}>
							{tickets.length}
						</NotificationIcon>
					</div>
					<div className={style.cardBody}>
						<NotificationIcon
							dashed={true}
							onclick={() => createNewTicketClickHandler()}>
							<Icon type={faPlus} />
						</NotificationIcon>
						<NotificationIcon onclick={() => arrowIconClickHandler()}>
							<Icon type={faArrowRight} />
						</NotificationIcon>
					</div>
				</Card>
			) : (
				<h6>loading...</h6>
			)}
		</>
	);
};

export default TicketsCard;
