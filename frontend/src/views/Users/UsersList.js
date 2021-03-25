// Packages
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// REDUX ACTIONS
import { getUsers } from 'store/actions/userActions';

// Icons
import { Icon, faArrowLeft } from 'components/Icon';

// Helper functions
import useFeaturedUser from 'hooks/useFeaturedUser';

// CSS
import style from './users.module.css';

const UsersList = () => {
	const dispatch = useDispatch();
	const [toggle, setToggle] = useState(true);
	const [allUsers, setAllUsers] = useState([]);
	const { submitId } = useFeaturedUser();

	const { users, loading, error } = useSelector((state) => state.users);

	const Button = () => {
		if (!toggle) {
			return (
				<button
					onClick={() => clickHandler()}
					className={style.allUsersListView}>
					<Icon type={faArrowLeft} />
					All users
				</button>
			);
		} else {
			return null;
		}
	};

	useEffect(() => {
		if (!users) {
			dispatch(getUsers());
		} else {
			setAllUsers(users);
		}
	}, [dispatch, users]);

	const clickHandler = (id) => {
		submitId(id);
		setToggle(!toggle);
	};

	return (
		<>
			<Button />
			<div className={toggle ? style.usersContainer : style.none}>
				{loading ? (
					<h6>loading</h6>
				) : error ? (
					<h6>{error}</h6>
				) : allUsers ? (
					allUsers.map((user) => (
						<div key={user._id} className={style.usersBox}>
							<img
								src={user.avatar}
								className={style.avatar}
								alt=''
							/>

							<div className={style.resourceContainer}>
								<div className={style.nameContainer}>
									<h5>{user.name}</h5>
								</div>
								<div className={style.buttonContainer}>
									<button className={style.addButton}>
										Add
									</button>
									<button
										onClick={() => clickHandler(user._id)}
										className={style.deleteButton}>
										View
									</button>
								</div>
							</div>
						</div>
					))
				) : (
					<h6>wating for some great stuff</h6>
				)}
			</div>
		</>
	);
};

export default UsersList;
