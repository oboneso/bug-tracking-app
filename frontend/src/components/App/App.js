import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import HomePage from 'views/HomePage';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage';
import Dashboard from 'views/private/DashBoard';
import ProfilePage from 'views/private/ProfilePage';
import CreateTicketPage from 'views/MyTicketsPage/CreateTicketPage';
import SingleTicketPage from 'views/MyTicketsPage/SingleTicket';

const App = () => {
	return (
		<ChakraProvider resetCSS>
			<Router>
				<Route path='/dashboard' component={Dashboard} />
				<Route path='/create-ticket' component={CreateTicketPage} />
				<Route path='/single-ticket' component={SingleTicketPage} />
				<Route path='/profile' component={ProfilePage} />
				<Route path='/register' component={RegisterPage} />
				<Route path='/login' component={LoginPage} />
				<Route path='/' component={HomePage} exact />
			</Router>
		</ChakraProvider>
	);
};

export default App;
