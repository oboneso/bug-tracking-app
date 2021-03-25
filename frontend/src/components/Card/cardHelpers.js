const makeCurrentCard = (type) => {
	const ticketItems = {
		title: 'tickets',
		color: 'blue',
		modal: 'createTicket',
	};
	const projectItems = {
		title: 'projects',
		color: 'orange',
		modal: 'createProjects',
	};

	const userItems = {
		title: 'users',
		color: 'green',
		modal: 'createUser',
	};

	if (type === 'tickets') {
		return ticketItems;
	} else if (type === 'projects') {
		return projectItems;
	} else if (type === 'users') {
		return userItems;
	}
};

export default makeCurrentCard;
