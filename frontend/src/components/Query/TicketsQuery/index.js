import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets } from 'store/actions/ticketActions';

const TicketsQuery = (props) => {
	const dispatch = useDispatch();

	const { tickets, loading, error } = useSelector((state) => state.tickets);

	useEffect(() => {
		dispatch(getTickets());
	}, []);
	return (
		<>
			{loading ? (
				<h6>loading...</h6>
			) : error ? (
				<h6>{error}</h6>
			) : tickets ? (
				<>{props.children}</>
			) : (
				<h6>Waiting for some great things</h6>
			)}
		</>
	);
};

export default TicketsQuery;
