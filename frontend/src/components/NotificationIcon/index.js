import React from 'react';
import { useSelector } from 'react-redux';

import style from './notification_icon.module.css';

const NotificationIcon = ({ children, styles, dashed, onclick }) => {
	return (
		<div
			onClick={onclick}
			className={
				styles ? null : dashed ? style.dashedIcon : style.notification_icon
			}>
			{children}
		</div>
	);
};
export default NotificationIcon;
