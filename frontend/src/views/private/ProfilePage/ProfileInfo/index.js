import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';

import style from './profileInfo.module.css';
import { getUserDetails } from 'store/actions/userActions';

const ProfileInfo = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);
	const { user } = useSelector((state) => state.userDetails);

	useEffect(() => {
		dispatch(getUserDetails(userInfo._id));
	}, []);
	return (
		<div className={style.profileInfoContainer}>
			{!user ? (
				<h6>loading...</h6>
			) : (
				<>
					<div className={style.title}>Profile</div>

					<div className={style.userInfoSection}>
						<div className={style.profileDataItem}>
							<div className={style.profileInput}>
								{' '}
								My name is {user.name}.
							</div>
						</div>
						<div className={style.profileDataItem}>
							<label className={style.profileLabel}></label>
							<div className={style.profileInput}>
								My username is {user.username}.
							</div>
						</div>
						<div className={style.profileDataItem}>
							<div className={style.profileInput}>
								My role is {user.role}.
							</div>
						</div>
						<div className={style.profileDataItem}>
							<div className={style.profileInput}>
								{user.email}.
							</div>
						</div>

						<div className={style.profileDataItem}>
							<div className={style.profileInput}>
								Joined{' '}
								<Moment format='MMMM YYYY'>
									{user.joined}
								</Moment>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ProfileInfo;
