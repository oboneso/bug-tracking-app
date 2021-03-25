import React from 'react';

import { useSelector } from 'react-redux';

import style from './ProfileHeader.module.css';

const ProfileHeader = () => {
	const { userInfo } = useSelector((state) => state.userLogin);

	return (
		<div className={style.profileHeaderContainer}>
			<h2 className={style.nameHeader}>{userInfo.name}</h2>
			<div className={style.subtitleHeader}>
				<div className={style.spanHeader}>
					user: {userInfo.username}
				</div>
				<div
					style={{ width: '50px', fontSize: '20px' }}
					className={style.spanHeader}>
					|
				</div>
				<div className={style.spanHeader}>{userInfo.email}</div>
			</div>
			<div className={style.locationHeader}>
				<div className={style.location}>Ontario, Canada</div>
			</div>
		</div>
	);
};

export default ProfileHeader;
