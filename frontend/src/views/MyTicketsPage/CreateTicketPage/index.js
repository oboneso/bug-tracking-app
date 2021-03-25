// Packages
import React from 'react';
import { useSelector } from 'react-redux';

import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

// Styles ~ css

const CreateTicketPage = () => {
	const currentPage = useSelector((state) => state.currentPage);

	return (
		<>
			{currentPage === 1 ? (
				<PageOne />
			) : currentPage === 2 ? (
				<PageTwo />
			) : currentPage === 3 ? (
				<PageThree />
			) : null}
		</>
	);
};

export default CreateTicketPage;
