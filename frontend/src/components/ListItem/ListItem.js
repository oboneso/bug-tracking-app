/** @format */

import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

import { styles } from './ListItemStyles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { showComponent } from '../../store/actions/navigationActions';

const color = {
	width: '60px',
	height: '60px',
	position: 'absolute',
	top: '-20px',
	left: '15px',
	transform: 'scale(0.3)',
	background: 'yellow',
	color: 'black',
};

const ListItem = ({ link, icon, title, component }) => {
	const dispatch = useDispatch();
	const [hover, setHover] = useState(false);

	const handleClick = (component) => {
		dispatch(showComponent(component));
	};

	return (
		<li
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			style={hover ? styles.hoverLi : styles.li}
			onClick={() => handleClick(component)}>
			<div style={styles.a}>
				<span style={styles.icon}>
					{icon ? (
						<FontAwesomeIcon style={styles.fa} icon={icon} />
					) : (
						''
					)}
				</span>
				<span style={styles.title}>{title}</span>
			</div>
		</li>
	);
};

export default ListItem;
