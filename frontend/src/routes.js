/** @format */

// Icons
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const routes = [
	{
		path: '/',
		exact: true,
		title: 'Home',
		icon: faHome,
		component: 'home',
	},
	{
		path: '/profile',
		exact: false,
		title: 'Profile',
		icon: faUserCircle,
		component: 'My Profile',
	},
	{
		path: '/users',
		exact: false,
		title: 'users',
		icon: faUsers,
		component: 'Users',
	},
	{
		path: '/tickets',
		exact: false,
		title: 'My Tickets',
		icon: faBug,
		component: 'My Tickets',
	},
	{
		path: '/my-projects',
		exact: false,
		title: 'My Projects',
		icon: faProjectDiagram,
		component: 'My Projects',
	},
	{
		path: '/create-project',
		exact: false,
		title: 'Create Project',
		icon: faPlus,
		component: 'Create Project',
	},
	{
		path: '/logout',
		exact: false,
		title: 'Signout',
		icon: faSignOutAlt,
		component: 'Signout',
	},
];

export default routes;
