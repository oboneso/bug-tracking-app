import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'store/actions/userActions';

const UsersQuery = (props) => {
	const dispatch = useDispatch();

	const { users, loading, error } = useSelector((state) => state.users);

	useEffect(() => {
		if (!users) {
			dispatch(getUsers());
		}
	}, []);
	return (
		<>
			{loading ? (
				<h6>loading...</h6>
			) : error ? (
				<h6>{error}</h6>
			) : users ? (
				<>{props.children}</>
			) : (
				<h6>Waiting for some great things</h6>
			)}
		</>
	);
};

export default UsersQuery;
