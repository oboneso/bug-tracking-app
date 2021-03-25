import { useDispatch } from 'react-redux';

import { setFeaturedProfile } from 'store/actions/userActions';
import { SET_FEATURED_PROFILE_RESET } from 'store/types';

const useFeaturedUser = (id) => {
	const dispatch = useDispatch();

	const submitId = (id) => {
		dispatch({
			type: SET_FEATURED_PROFILE_RESET,
		});
		dispatch(setFeaturedProfile(id));
	};

	return { submitId };
};

export default useFeaturedUser;
