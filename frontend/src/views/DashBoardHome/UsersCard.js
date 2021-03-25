import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from 'components/Card';
import CardTitle from 'components/Card/CardTitle';
import NotificationIcon from 'components/NotificationIcon';
import { Icon, faArrowRight, faPlus } from 'components/Icon';

import { getUsers } from 'store/actions/userActions';
import { createAlert } from 'store/actions/navigationActions';

import style from './dashboard_home.module.css';

const UsersCard = () => {
	const dispatch = useDispatch();

	const [localUsers, setLocalUsers] = useState('loading...');
	const { users, loading, error } = useSelector((state) => state.users);

	if (!(users === localUsers) && users) {
		setLocalUsers(users);
	}

	useEffect(() => {
		try {
			if (users || loading) {
				return;
			} else {
				dispatch(getUsers());
			}
		} catch (error) {
			dispatch(createAlert(error, 'error'));
		}
	}, []);
	return (
		<>
			{users ? (
				<Card>
					<div className={style.cardHeader}>
						<CardTitle>{'Users'}</CardTitle>
						<div>{users.length}</div>
					</div>
					<div className={style.cardBody}>
						<NotificationIcon dashed={true}>
							<Icon type={faPlus} />
						</NotificationIcon>
						<NotificationIcon>
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

export default UsersCard;
