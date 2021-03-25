import React from 'react';

import ProfileInfo from 'views/private/ProfilePage/ProfileInfo';

import style from './profileBody.module.css';

const ProfileBody = () => {
	return (
		<div className={style.profileBodyContainer}>
			<div className={style.column}>
				<ProfileInfo />
			</div>

			<div className={style.column}>Hello</div>
		</div>
	);
};

export default ProfileBody;
