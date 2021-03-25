import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Icon, faCamera } from 'components/Icon';

import { modalStatusAction } from 'store/actions/navigationActions';

import style from './ProfileAvatar.module.css';
import { getUserDetails } from 'store/actions/userActions';

const iconStyle = {
	fontSize: '18px',
};

const ProfileAvatar = () => {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.userDetails);

	const editAvatarClickHandler = () => {
		dispatch(modalStatusAction(true, 'editAvatar'));
	};

	return (
		<div className={style.avatarContainer}>
			<div className={style.avatarBox}>
				<img
					src={
						user
							? user.avatar
							: 'https://png.pngtree.com/png-clipart/20210310/original/pngtree-graphic-default-avatar-png-image_5938131.jpg'
					}
					className={style.largeAvatar}
					alt=''></img>
				<div
					onClick={() => editAvatarClickHandler()}
					className={style.iconContainer}>
					<Icon
						type={faCamera}
						style={iconStyle}
						className={style.cameraIcon}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProfileAvatar;
