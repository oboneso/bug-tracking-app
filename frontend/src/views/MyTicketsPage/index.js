import Moment from 'react-moment';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import {
	createAlert,
	showComponent,
	showWidgetItem,
} from 'store/actions/navigationActions';
import {
	deleteTicket,
	getTicket,
	getTickets,
	singleTicketId,
} from 'store/actions/ticketActions';

// Icons
import { Icon, faBug, faRocket, faEdit, faTrash } from 'components/Icon';

// Styles ~ css
import style from './styles.module.css';
import { CREATE_TICKET_RESET, DELETE_TICKET_RESET } from 'store/types';
import Card from 'components/Card';
import CardTitle from 'components/Card/CardTitle';

const MyTicketsPage = () => {
	const dispatch = useDispatch();

	const { tickets, loading, error } = useSelector((state) => state.tickets);

	const { successCreate } = useSelector((state) => state.ticketCreate);
	const { isDeleted } = useSelector((state) => state.ticketDeleted);

	const editTicketClickHandler = (id) => {
		dispatch(singleTicketId(id));
		dispatch(getTicket(id));
		dispatch(showComponent('singleTicket'));
		// dispatch(showWidgetItem('ticket'));
	};

	const deleteTicketClickHandler = (id) => {
		dispatch(deleteTicket(id));
	};

	useEffect(() => {
		dispatch(getTickets());
		dispatch({ type: CREATE_TICKET_RESET });
		dispatch(createAlert('Ticket Created Successfully', 'success'));
	}, [dispatch, successCreate]);

	useEffect(() => {
		if (isDeleted?.message) {
			dispatch(getTickets());
			dispatch({ type: DELETE_TICKET_RESET });
			dispatch(createAlert(isDeleted.message, 'success'));
		}
	}, [dispatch, isDeleted]);

	return (
		<>
			{loading ? (
				<h6>loading...</h6>
			) : error ? (
				<h6>{error}</h6>
			) : tickets ? (
				<div className={style.tableContainer}>
					{tickets &&
						tickets.map((ticket, index) => (
							<div key={ticket._id} className={style.cardWrapper}>
								<Card>
									<div className={style.cardHeader}>
										<div className={style.leftHeader}>
											<div className={style.ticketTypeIcon}>
												{ticket.ticketType === 'Bug Report' && (
													<Icon type={faBug} />
												)}
												{ticket.ticketType === 'Feature Request' && (
													<Icon type={faRocket} />
												)}
											</div>
											<h6>{ticket.ticketType}</h6>
										</div>
										<div
											className={
												ticket.status === 'open'
													? style.statusOpen
													: style.statusClosed
											}>
											{ticket.status}
										</div>
									</div>
									<div className={style.cardBody}>
										<div>{ticket.title}</div>
										<CardTitle>{ticket.project}</CardTitle>
									</div>
									<div className={style.cardFooter}>
										<div>
											<Moment format='MMM-DD'>{ticket.createdAt}</Moment>
										</div>
										<div className={style.iconWrapper}>
											<div
												className={style.editIcon}
												onClick={() => editTicketClickHandler(ticket._id)}>
												<Icon type={faEdit} />
											</div>{' '}
											<div
												className={style.trashIcon}
												onClick={() => deleteTicketClickHandler(ticket._id)}>
												<Icon type={faTrash} />
											</div>
										</div>
									</div>
								</Card>
							</div>
						))}
				</div>
			) : (
				<h6>waiting for some great things</h6>
			)}
			<button
				className={style.createTicketButton}
				onClick={() => dispatch(showComponent('createTicket'))}>
				Create Ticket
			</button>
		</>
	);
};

export default MyTicketsPage;

// <div
// 	style={{
// 		background: 'rgb(239, 239, 239)',
// 	}}
// 	className={style.row}>
// 	<div style={{ paddingLeft: '10px' }} className={style.tableHeader}>
// 		-
// 	</div>
// 	<div className={style.tableHeader}>Title</div>
// 	<div className={style.tableHeader}>Project</div>
// 	<div className={style.tableHeader} align='right'>
// 		Status
// 	</div>
// 	<div className={style.tableHeader} align='right'>
// 		Date Created
// 	</div>
// 	<div className={style.tableHeader} align='center'>
// 		More...
// 	</div>
// </div>;

// <div
// 		className={style.row}
// 		onClick={() => clickHandler(ticket._id)}
// 		key={ticket._id}>
// 		<div
// 			style={{
// 				paddingLeft: '10px',
// 				width: '30px',
// 			}}
// 			className={style.tableCell}>{`${index + 1}.`}</div>
// 		<div className={style.tableCell} component='th' scope='row'>
// 			{ticket.title}
// 		</div>
// 		<div className={style.tableCell}>{ticket.project}</div>
// 		<div className={style.tableCell} align='right'>
// 			{ticket.status}
// 		</div>
// 		<div className={style.tableCell} align='right'>
// 			<Moment format='MMM-DD'>{ticket.createdAt}</Moment>
// 		</div>
// 		<div className={style.tableCell} align='center'>
// 			<FontAwesomeIcon
// 				icon={faEdit}
// 				className={style.editIcon}
// 				onClick={() => clickHandler(ticket._id)}
// 			/>
// 		</div>
// 	</div>
