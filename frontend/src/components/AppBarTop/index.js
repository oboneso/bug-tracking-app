import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showComponent } from 'store/actions/navigationActions';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './appBarTop.module.css';

const AppBarTop = () => {
	const dispatch = useDispatch();

	const { component } = useSelector((state) => state.component);

	// format state data
	const currentPage = JSON.stringify(component)
		.replace(/"/, '')
		.replace(/"/, '');

	return (
		<div className={style.appBarContainer}>
			<span> {currentPage && currentPage}</span>
			<div className={style.search}>
				<input className={style.input} type='text' />
				<label className={style.label}>
					<FontAwesomeIcon icon={faSearch} />
				</label>
			</div>
			<FontAwesomeIcon
				onClick={() => dispatch(showComponent('My Profile'))}
				className={style.profileIcon}
				icon={faUserCircle}
			/>
		</div>
	);
};

export default AppBarTop;
