import React from 'react';
import { useDispatch } from 'react-redux';

import { showWidgetItem } from 'store/actions/navigationActions';

import style from './card.module.css';

const Card = ({ title = 'Title Goes Here', styles, children }) => {
	const dispatch = useDispatch();

	const cardClickHandler = (func, arg) => {
		dispatch(func(arg));
	};
	return (
		<div style={styles} className={style.card}>
			{children}
		</div>
	);
};

export default Card;

//	onClick={() => cardClickHandler(showWidgetItem(title))}>
