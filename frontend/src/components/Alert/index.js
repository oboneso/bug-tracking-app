import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DELETE_ALERT } from 'store/types';

import style from './alert.module.css';

const Alert = () => {
	const dispatch = useDispatch();
	const [alert, setAlert] = useState(false);
	const { message, type } = useSelector((state) => state.createAlert);

	const closeAlertClickHandler = () => {
		setAlert(false);
		dispatch({ type: DELETE_ALERT });
	};

	useEffect(() => {
		if (type || message) {
			setAlert(true);

			setTimeout(() => {
				setAlert(false);
				dispatch({ type: DELETE_ALERT });
			}, 4000);
		}
	}, [dispatch]);

	return (
		<div className={!alert ? style.none : style.alertContainer}>
			<div onClick={() => closeAlertClickHandler()} className={style.close}>
				X
			</div>
			<div className={style.alert}>
				{message ? message : type ? type : 'no message available'}
			</div>
		</div>
	);
};

export default Alert;
