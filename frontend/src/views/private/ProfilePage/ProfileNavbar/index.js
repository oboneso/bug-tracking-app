import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	PROFILE_NAV_KEY,
	SET_EDITING_TRUE,
	SET_MODAL_STATUS,
} from 'store/types';

import style from './profileNavbar.module.css';

const ProfileNavbar = () => {
	const dispatch = useDispatch();
	const profileKey = useSelector((state) => state.profileKey);

	const { userInfo } = useSelector((state) => state.userLogin);

	const setActiveKey = (activeKey) => {
		dispatch({
			type: PROFILE_NAV_KEY,
			payload: activeKey,
		});
	};

	const editClickHandler = () => {
		setActiveKey('edit');
		dispatch({
			type: SET_EDITING_TRUE,
			payload: { isEditing: true, id: userInfo._id },
		});

		dispatch({
			type: SET_MODAL_STATUS,
			payload: { open: true, component: 'editProfile' },
		});
	};

	return (
		<div className={style.profileNavbarContainer}>
			<div className={style.navLeft}>
				<div
					onClick={() => setActiveKey('profile')}
					className={
						profileKey === 'profile' ? style.active : style.navTab
					}>
					Profile
				</div>
				<div
					onClick={() => setActiveKey('friends')}
					className={
						profileKey === 'friends' ? style.active : style.navTab
					}>
					Friends
				</div>
			</div>
			<div className={style.navRight}>
				<div
					onClick={() => editClickHandler()}
					className={style.editButtonContainer}>
					Edit Profile
				</div>
			</div>
		</div>
	);
};

export default ProfileNavbar;
