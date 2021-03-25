/** @format */

import React from 'react';
import routes from '../../routes';
import ListItem from '../ListItem/ListItem';
import style from './SidebarWide.module.css';

const SidebarWide = ({ open }) => {
	return (
		<div className={open ? style.navigationOpen : style.navigationClose}>
			<ul className={style.ul}>
				{routes.map((route) => (
					<ListItem
						key={route.title}
						icon={route.icon}
						link={route.path}
						title={route.title}
						component={route.component}
						exact={route.exact ? true : false}
					/>
				))}
			</ul>
		</div>
	);
};

export default SidebarWide;
