// Packages
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
// import Comment from 'components/Comment';
import DataField from './DataField';

// Actions
import { getTicket } from 'store/actions/ticketActions';

// Styles
import style from './SingleTicket.module.css';

const TicketData = () => {
	const dispatch = useDispatch();

	const { ticket } = useSelector((state) => state.id);
	const isEditing = useSelector((state) => state.isEditing);

	const { singleTicket, loading, error } = useSelector(
		(state) => state.singleTicket,
	);

	useEffect(() => {
		if (ticket) {
			dispatch(getTicket(ticket));
		}
	}, [dispatch, ticket, isEditing]);
	return (
		<>
			{loading ? (
				<h6>loading...</h6>
			) : error ? (
				<h6>{error}</h6>
			) : singleTicket ? (
				<div className={style.dataContainer}>
					<DataField label={'Title'} data={singleTicket.title} />
					<DataField
						label={'Description'}
						data={singleTicket.description}
					/>
					<DataField
						label={'Assigned To'}
						data={singleTicket.assignedTo}
					/>
					<DataField label={'Project'} data={singleTicket.project} />
					<DataField
						label={'Priority'}
						data={singleTicket.priority}
					/>
					<DataField label={'Status'} data={singleTicket.status} />
					<DataField
						label={'Submitted By'}
						data={singleTicket.submittedBy}
					/>
					<DataField
						label={'Date Created'}
						data={singleTicket.createdAt}
						date={true}
					/>
					<DataField label={'Ticket Id'} data={singleTicket._id} />
				</div>
			) : (
				<h6>waiting for something amazing</h6>
			)}
		</>
	);
};
export default TicketData;
