import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from 'store/actions/projectActions';
import { getTickets } from 'store/actions/ticketActions';
import { getUserDetails, getUsers } from 'store/actions/userActions';

const Query = (props) => {
	const dispatch = useDispatch();

	const { userInfo } = useSelector((state) => state.userLogin);

	useEffect(() => {
		dispatch(getUsers());
		dispatch(getTickets());
		dispatch(getProjects());
		dispatch(getUserDetails(userInfo._id));
	}, []);

	return <></>;
};

export default Query;
