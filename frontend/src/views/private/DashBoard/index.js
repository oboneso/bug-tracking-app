// Packages
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Styles
import style from './Dashboard.module.css';

// Components
import View from 'components/View';
import Alert from 'components/Alert';
import Modal from 'components/Modal';
import AppBarTop from 'components/AppBarTop';
import SidebarWide from 'components/SidebarWide/SidebarWide';

import { ErrorBoundary } from 'react-error-boundary';

// Icons
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dashboard = () => {
	// state of side navigation
	const [open, setOpen] = useState(false);

	// get users logged in status from global state
	const { userInfo } = useSelector((state) => state.userLogin);

	return (
		<ErrorBoundary
			FallbackComponent={ErrorFallback}
			onReset={() => {
				// reset the state of your app so the error doesn't happen again
			}}>
			<div className={style.dashboardContainer}>
				{!userInfo ? (
					<h6>
						You must login to view this page. Please click{' '}
						<Link to={'/login'}>here</Link> to login
					</h6>
				) : (
					<>
						<Modal />
						<div className={style.sidebar}>
							<SidebarWide open={open} />
						</div>

						<div className={style.header}>
							<button
								className={style.sideToggle}
								onClick={() => setOpen(!open)}>
								<FontAwesomeIcon icon={faBars} />
							</button>
							<AppBarTop className={style.appBarTop} />
						</div>

						<div className={style.mainContent}>
							<Alert />
							<View />
						</div>
					</>
				)}
			</div>
		</ErrorBoundary>
	);
};

export default Dashboard;

function ErrorFallback({ error, resetErrorBoundary, data }) {
	return (
		<div role='alert'>
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
}
