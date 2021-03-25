// Packages
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { Icon, faChevronCircleLeft } from 'components/Icon';
import LoginForm from 'components/LoginForm/LoginForm';

// Css
const loginContainer = {
	display: 'flex',
	width: '100vw',
	height: '100vh',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'relative',
};

const homeLinkText = {
	position: 'absolute',
	top: '15px',
	left: '50px',
};

const iconStyle = {
	position: 'absolute',
	fontSize: '35px',
	color: 'var(--clr-darkblue)',
	top: '10px',
	left: '10px',
};

const LoginPage = () => {
	return (
		<div style={loginContainer}>
			<div style={iconStyle}>
				<Link className={iconStyle} to='/'>
					<Icon type={faChevronCircleLeft} style={iconStyle} />
				</Link>
				<h6 style={homeLinkText}>Home</h6>
			</div>
			<LoginForm />
		</div>
	);
};

export default LoginPage;
