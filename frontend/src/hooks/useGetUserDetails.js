import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserDetails } from 'store/actions/userActions';

const useGetUserDetails = () => {
	const dispatch = useDispatch();
	const [me, setMe] = useState(false);

	const submitId = (id) => {
		dispatch(getUserDetails(id));
	};

	const { user } = useSelector((state) => state.userDetails);

	useEffect(() => {
		if (user) {
			setMe(user);
		}
	}, [user]);

	return { me, submitId };
};

export default useGetUserDetails;
